import styled from "styled-components/native";

export const List = styled.ListView``;

export const ListItem = styled.TouchableOpacity`
  flex: 1;
  padding: 5px 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;
export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Left = styled.View`
  margin: 5px;
  margin-left: 0;
`;
export const Body = styled.View`
  padding: 5px;
  flex: 1;
`;

export const Right = styled.View`
  padding: 10px 0;
  width: 70px;
  height: 100%;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const SectionTitle = styled.Text`
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 20;
  margin: 10px 10px 0 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;

export const Contact = styled.Text`
  font-weight: bold;
  font-size: 18;
  margin-bottom: 5px;
`;
export const Message = styled.Text`
  font-size: 16;
  color: #999;
`;
export const Date = styled.Text`
  font-size: 12;
`;

export const Row = styled.View`
  margin: 10px 0;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  background-color: #624cab;
  padding: 10px 20px;
  border-radius: 10px;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 20;
`;
