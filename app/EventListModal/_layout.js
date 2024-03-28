import { Stack, Link } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

function BackButton(){
  return (
      <Text style = {{
          fontSize: 32
      }}> 
          <AntDesign name="left" size={32} color="black" onClick={toNewTab}/>
          
          EventList: something else
          
      </Text>
  );
}
function toNewTab() {
  router.replace("/Calender")
}


export default function EventList() {
  return <Stack screenOptions={{
    headerTitle: props =>  <BackButton/>
  }}/>;
}