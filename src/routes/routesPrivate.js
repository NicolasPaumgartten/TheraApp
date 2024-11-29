import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Main  from "../screens/main/main.jsx";
import  Services  from "../screens/services/services.jsx";
import Schedule from "../screens/schedule/schedule.jsx";
import { COLORS } from "../constants/theme.js";

const Stack = createNativeStackNavigator();

function RoutesPrivate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{
          headerShown: false,
          headerTitle: "Voltar",
        }}
      />

      <Stack.Screen
        name="services"
        component={Services}
        options={{
          headerTitle: "Serviços",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: COLORS.white,
          headerStyle: {
            backgroundColor: COLORS.brown,
          },
        }}
      />

      <Stack.Screen
        name="schedule"
        component={Schedule}
        options={{
          headerTitle: "Agendamento",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: COLORS.brown,
        }}
      />
    </Stack.Navigator>
  );
}

export default RoutesPrivate;
