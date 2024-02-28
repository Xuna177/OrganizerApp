import { Stack, Link } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function EventList() {
  return <Stack screenOptions={{
    headerTitle: props =>  <Title/>
  }}/>;
}