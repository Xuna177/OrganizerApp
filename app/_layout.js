import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarLabel: "Setting",
          title: "Setting"
        }}
      />
        <Tabs.Screen
        name="Goals"
        options={{
          tabBarLabel: "Goals",
          title: "Goal List"
        }}
      />
    </Tabs>
  );
}