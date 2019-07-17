import React, { Component } from "react";
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  InteractionManager
} from "react-native";
import Styles from "../../styles";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome5";
import { jsUcfirst } from "../../util/StringFunctions";
import { AppContainer } from "../../styles/global";
import {
  Left,
  ListItem,
  SectionTitle,
  Body,
  Right,
  Contact,
  Message,
  Date,
  Avatar,
  Row,
  Button,
  TextButton
} from "./styles";
import api from "../../services/api";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: true,
      contacts: []
    };

    moment.locale("pt-br");
  }
  /*
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.contacts !== nextState.contacts;
  }
*/
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        loading: true
      });
      this.getContacts();
    });
  }

  getContacts = async () => {
    this.setState({
      loading: true
    });
    const { page } = this.state;
    const contactsReceived = await api.get(`/?seed=2&page=${page}&results=60`);

    this.setState({
      contacts: contactsReceived.data.results,
      loading: false
    });
  };

  render() {
    const { contacts, loading } = this.state;
    return (
      <AppContainer>
        <FlatList
          data={contacts}
          initialNumToRender={contacts.length}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ListHeaderComponent={
            <SectionTitle>Contacts ({contacts.length})</SectionTitle>
          }
          ListFooterComponent={
            <Row>
              <Button>
                <TextButton>Anterior</TextButton>
              </Button>
              <Button>
                <TextButton>Próxima</TextButton>
              </Button>
            </Row>
          }
          extraData={this.state}
          disableVirtualization={true}
          refreshing={loading}
          onRefresh={this.getContacts}
          onEndReachedThreshold={0.5}
        />
      </AppContainer>
    );
  }

  _keyExtractor = (item, index) => `list-item-${index}`;
  _renderItem = ({ item }) => (
    <ListItem
      onPress={() => {
        this.props.navigation.navigate("Message", {
          contact: item
        });
      }}
    >
      <Left>
        <Avatar source={{ uri: item.picture.medium }} />
      </Left>

      <Body>
        <Contact>
          {jsUcfirst(item.name.title)}. {jsUcfirst(item.name.first)}{" "}
          {jsUcfirst(item.name.last)}
        </Contact>
        <Message numberOfLines={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Message>
      </Body>

      <Right>
        <Date>{moment(item.dob.date).format("DD/MM/YYYY")}</Date>
        <Date>{moment(item.dob.date).format("HH:mm")}</Date>
      </Right>
    </ListItem>
  );
}
