import { Tabs, Stack } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function TabsLayout() {
  return (
    <Stack>
    <Tabs screenOptions={{ headerShown: false }} backBehavior="history">
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({focused, color, size}) => ( <AntDesign name="home" size={32} color={color}/>),
          tabBarLabel: "Home",
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({focused, color, size}) => ( <AntDesign name="setting" size={32} color={color}/>),
          tabBarLabel: "Settings",
          title: "Settings"
        }}
      />
      <Tabs.Screen
        name="Calender"
        options={{
          tabBarIcon: ({focused, color, size}) => ( <AntDesign name="calendar" size={32} color={color}/>),
          tabBarLabel: "Calender",
          title: "Calender"
        }}
      />
        <Tabs.Screen
        name="GoalList"
        options={{
          tabBarIcon: ({focused, color, size}) => ( <AntDesign name="carryout" size={32} color={color}/>),
          tabBarLabel: "GoalList",
          title: "GoalList"
        }}
      />
        <Tabs.Screen
        name="Goal"
        options={{
          tabBarLabel: "Goal",
          title: "Goal",
          href: null
        }}
      />
      <Tabs.Screen
        name="Event"
        options={{
          tabBarLabel: "Event",
          title: "Event",
          href: null
        }}
      />
      <Tabs.Screen
        name="Event"
        options={{
          tabBarLabel: "Event",
          title: "Event",
          href: null
        }}
      />
    </Tabs>

      <Stack.Screen
          name="modal"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: 'modal',
          }}
        />
        </Stack>
  );
}