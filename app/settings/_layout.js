import { Stack } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';

function Title(){
  return (
      <Text> 
          Settings
      </Text>
  );
}
export default function SettingsLayout() {
  return <Stack screenOptions={{
    headerTitle: props =>  <Title/>
    }}/>;
}