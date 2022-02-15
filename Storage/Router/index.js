/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login,Register,Home,Detail} from '../Page'

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
			<Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
			<Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
			<Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
			{/* <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: true}}
      /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
