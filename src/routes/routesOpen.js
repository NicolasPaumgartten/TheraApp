import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Login  from "../screens/login/login.jsx";
import  Account  from "../screens/account/account.js";
import  Home  from "../screens/home/home.jsx"; // sei la to perdido ! rlx mano kk sem desespero 

const Stack = createNativeStackNavigator();

function RoutesOpen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="home" component={Home}
        options={{
          headerShown: false
        }}/>
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
// se liga não é melhor desativar a API ? pq o codigo ja foi modificado para não liberar com base de dados o erro é de roteamento , ja tirei a chamada da api tava no banheiro nem vi , cochilou perdeu kk
export default RoutesOpen;
