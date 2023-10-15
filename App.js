import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import Search from './screens/Search';
import Home from './screens/Home';
import Categories from './screens/main/Categories';
import SavedItem from './screens/main/SavedItem';
import MapView from './screens/main/MapView';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = ()=>{
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='MapView' component={MapView}/>
    </Stack.Navigator>
  )
}

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#20C065',
        tabBarInactiveTintColor: '#A8A8A8',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          display: 'flex',
        },
      }}>
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 24, height: 24 }} source={require('./assets/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Collections"
        component={Categories} 
        options={{
          tabBarLabel: 'Collections',
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 24, height: 24 }} source={require('./assets/icons8-sorting-100.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedItem}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 24, height: 24 }} source={require('./assets/icons8-heart-outline-500.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 24, height: 24 }} source={require('./assets/icons8-search-500.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="HomeTab" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name='MapView' component={MapView}/>
      </Stack.Navigator> */}
      <HomeTab/>
    </NavigationContainer>
  );
};

export default App;
