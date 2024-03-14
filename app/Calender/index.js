import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { router, Link } from 'expo-router';
import { Calendar } from 'react-native-calendars';
import { getData, storeData } from '../../Services/StorageService';

export default function Page() {
  const [enteredEventText, setEnteredEventText] = useState('');
  const [events, setEvents] = useState([]);
  const [calenderEvents, setCalenderEvents] = useState({});

function eventInputHandler(enteredText) {
  setEnteredEventText(enteredText);
}

function addEventHandler() {
  setEvents((currentEvents) => [
    ...currentEvents,
    enteredEventText,]
  );
}

async function getEvents (){
  const storedEvents = await getData('eventList')
  setEvents(storedEvents)
  var formattedEvents = {};
storedEvents.forEach(x => {
formattedEvents[x.date.substring(0,10)] = {marked: true};  
});
setCalenderEvents(formattedEvents)
}


useEffect(()=>{
  //const unsubscribe = navigation.addListener('focus', () => {
    getEvents()
    // The screen is focused
    // Call any action
  //});
  //return unsubscribe;
}, []) 

function toNewTab() {
  router.push("/Event")
}


  return (
    <View style={styles.appContainer}>
      <Calendar
  onDayPress={day => {
    console.log('selected day', day);
    router.push({pathname: "/EventListModal", params: {date: day.dateString}});
  }}
  markedDates={
    calenderEvents
  }
  />
      <View style={styles.inputContainer}>  

        <Button 
        title = "Add Event"
        onPress={toNewTab}
        />
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
  eventsContainer: {
    flex: 5
  }
});