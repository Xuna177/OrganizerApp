import { Stack } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';

function Title(){
  return (
      <Text> 
          Calender
      </Text>
  );
}
export default function CalenderLayout() {
return <Stack screenOptions={{
  headerTitle: props =>  <Title/>
}}/>;
}