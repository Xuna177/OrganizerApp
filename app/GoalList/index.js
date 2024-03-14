import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { router } from 'expo-router';
import { getData, storeData } from '../../Services/StorageService'
export default function Page({navigation}) {
  const [goals, setGoals] = useState([]);

function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
}

async function getGoals (){
  const storedGoals = await getData('goalList') 
  setGoals(storedGoals ?? [])
}

useEffect(()=>{
  //const unsubscribe = navigation.addListener('focus', () => {
    getGoals()
    // The screen is focused
    // Call any action
  //});
  //return unsubscribe;
}, [navigation]) 


function toNewTab() {
  router.push("/Goal")
}

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>  
        <TextInput 
        style={styles.textInput} 
        placeholder ="Your Goal!" 
        onChangeText={goalInputHandler}/>

        <Button 
        title = "Add Goal"
        onPress={toNewTab}
        />
      </View>
      <Text>Goal List: </Text>
      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => <Text key={index}> {goal} </Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});