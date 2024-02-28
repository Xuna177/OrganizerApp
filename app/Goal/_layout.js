import { Stack } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
function BackButton(){
    return (
        <Text style = {{
            fontSize: 32
        }}> 
            <AntDesign name="left" size={32} color="black" onClick={toNewTab}/>
            
            Goal
        </Text>
    );
}
function toNewTab() {
    router.replace("/GoalList")
  }
export default function GoalLayout() {
  return <Stack screenOptions={{
    headerTitle: props =>  <BackButton/>
  }}/>;
}