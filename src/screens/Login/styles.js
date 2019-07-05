import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 5px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 70;
  font-weight: bold;
  color: #624cab;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  font-size: 16;
  padding: 10px 20px;
  border: 1px solid #624cab;
  margin-bottom: 15px;
  border-radius: 5px;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #624cab;
  border-radius: 5px;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 20;
`;
