import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { getData, storeData } from '../../Services/StorageService'
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

export default function Page() {
  const [enteredEventText, setEnteredEventText] = useState('');
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(dayjs());


  function eventInputHandler(enteredText) {
    setEnteredEventText(enteredText);
  }

  async function storeEvent(){
    console.log(date)
    const newEvent={
      enteredEventText,
      date: date.toISOString()
    }
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
    setEnteredEventText('');
    await storeData('eventList', newEvents);
  }

  async function getEvents (){
    const storedEvents = await getData('eventList')
    setEvents(storedEvents || [])
  }
  useEffect(()=>{
    getEvents()
  }, []) 


  return (
    <View style={styles.appContainer}>
     <Text>Add your Event!</Text>
      <TextInput 
        style={styles.textInput}
        value={enteredEventText || ''}
        placeholder ="Your Event!" 
        onChangeText={eventInputHandler}/>
       <Button 
        title = "Add Event"
        disabled={!enteredEventText}
        onPress={storeEvent}
        />
        <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
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
  eventsContainer: {
    flex: 5
  }
});