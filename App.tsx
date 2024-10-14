import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import MainNavigator from './src/routers/MainNavigator';


const Stack = createStackNavigator();


const App = () => {
  return (
    <GestureHandlerRootView className="flex-1">
   
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Main" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;