import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Page() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
}

function addGoalHandler() {
  setGoals((currentGoals) => [
    ...currentGoals,
    enteredGoalText,]
  );
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
        onPress={addGoalHandler}
        />
      </View>
      <Text>Goal List: </Text>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => <Text key={goal}> {goal} </Text>)}
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