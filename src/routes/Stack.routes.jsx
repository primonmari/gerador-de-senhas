import { createStackNavigator } from '@react-navigation/stack';
import PasswordGenerator from '../MainScreens/PasswordGenerator'; 

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PasswordGenerator" component={PasswordGenerator} />
    </Stack.Navigator>
  );
}