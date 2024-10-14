import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import Home from '../screens/Home';
import Page2 from '../screens/Page2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
 

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
 

const handleLogout = () => {
  navigation.navigate("Login")
}

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 100,
          // borderTopColor: 'black',
          // borderTopWidth: 2,
        },
        tabBarLabelStyle: {
          color: 'black',
          marginBottom: 12,
          fontSize: 14,
        },
        tabBarActiveBackgroundColor: '#CCC',
        tabBarInactiveBackgroundColor: 'white',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          tabBarIcon: () => <FontAwesome name="bars" size={30} color="#000" />,
          tabBarLabel: 'Home',
          headerLeft: () => (
            <TouchableOpacity className="ml-4" onPress={handleLogout}>
              <AntDesign
                name="logout"
                size={22}
                color="#000"
                style={{transform: [{rotate: '180deg'}]}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Page2"
        component={Page2}
        options={{
          headerTitle: 'Page2',
          headerTitleAlign: 'center',
          tabBarIcon: () => (
            <FontAwesome name="list-ol" size={30} color="#000" />
          ),
          tabBarLabel: 'Page2',
          headerRight: () => (
            <TouchableOpacity
              className="mr-4"
              onPress={() => {
                console.log("Pressed...")
              }}>
              <AntDesign name="bells" size={22} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;