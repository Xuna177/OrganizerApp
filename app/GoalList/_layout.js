import { Stack } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';

function Title(){
  return (
      <Text> 
          Goal List
      </Text>
  );
}
export default function GoalListLayout() {
  return <Stack screenOptions={{
    headerTitle: props =>  <Title/>
  }}/>;
}