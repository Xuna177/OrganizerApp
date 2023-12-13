import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Hi!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });