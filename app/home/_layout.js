import { Stack } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';

function Title(){
  return (
      <Text> 
          Home
      </Text>
  );
}

export default function HomeLayout() {
  return <Stack screenOptions={{
    headerTitle: props =>  <Title/>
    }}/>;
}