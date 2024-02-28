import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { getData, storeData } from '../../Services/StorageService'

export default function Page() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  async function storeGoal(){
    const newGoals = [...goals, enteredGoalText];
    setGoals(newGoals);
    setEnteredGoalText('');
    await storeData('goalList', newGoals);
  }

  async function getGoals (){
    const storedGoals = await getData('goalList')
    setGoals(storedGoals)
  }
  useEffect(()=>{
    getGoals()
  }, []) 


  return (
    <View style={styles.appContainer}>
     <Text>Add your Goal</Text>
      <TextInput 
        style={styles.textInput}
        value={enteredGoalText || ''}
        placeholder ="Your Goal!" 
        onChangeText={goalInputHandler}/>
       <Button 
        title = "Add Goal"
        disabled={!enteredGoalText}
        onPress={storeGoal}
        />
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