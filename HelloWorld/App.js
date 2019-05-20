/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu ios a a a a',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu android',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        
        <View style={{ alignItems: 'center', top: 50 }}>
          <Greeting name='Reagar' house='Targaryen' url='https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'></Greeting>
          <Greeting name='Sansa' house='Stark'></Greeting>
          <Greeting name='Dany'></Greeting>
        </View>
      </View>

    );
  }
}


class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 40, color: '#000' }}>
          Hello {this.props.name}, House of {this.props.house}!
          </Text>
        <Image source={{url: this.props.url}} style={{width: 193,height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
