import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Router />
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
