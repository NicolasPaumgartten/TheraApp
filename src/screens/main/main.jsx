import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icon from "../../constants/icon.js";
import Home  from "../home/home.jsx";
import  Calendar  from "../calendar/calendar.jsx";
import { Profile } from "../profile/profile.jsx";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <>
   
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
              headerTitleAlign: "center",
              headerTitle: () => {
                return (
                  <Image
                    source={icon.logo}
                    style={{ width: 125, height: 29 }}
                  />
                );
              },
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={icon.home}
                    style={{
                      width: 35,
                      height: 35,
                      opacity: focused ? 1 : 0.5, //se o icone estiver selecionado muda a opacidade
                    }}
                  />
                );
              },
            }}
          />


          <Tab.Screen name="Calendar" component={Calendar} options={{
              headerTitleAlign: "center",
              headerTitle: () => {
                return (
                  <Image
                    source={icon.logo}
                    style={{ width: 125, height: 29 }}
                  />
                );
              },
              tabBarShowLabel: false,
              unmountOnBlur: true,
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={icon.calendar}
                    style={{
                      width: 35,
                      height: 35,
                      opacity: focused ? 1 : 0.5,
                    }}
                  />
                );
              },
            }}
          />


          <Tab.Screen name="Profile" component={Profile} options={{
              headerTitleAlign: "center",
              headerTitle: () => {
                return (
                  <Image
                    source={icon.logo}
                    style={{ width: 125, height: 29 }}
                  />
                );
              },
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={icon.profile}
                    style={{
                      width: 35,
                      height: 35,
                      opacity: focused ? 1 : 0.5,
                    }}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>

    </>
  );
}