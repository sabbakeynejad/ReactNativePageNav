/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';


var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  // Make it snap back really quickly after canceling pop
  snapVelocity: 8,
  // Make it so we can drag anywhere on the screen
  edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
  // Use our custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture,
  }
});

var PageOne = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 2});
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#2cff8b'}]}>
        <Text style={styles.welcome}>This is a basic page navgation starter project</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcomeButton}>Check out page two</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});

var PageTwo = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 3});
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#ff1f64'}]}>
        <Text style={styles.welcome}>and This is page two!</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcomeButton}>Go to page three</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});


var PageThree = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 1});
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#faff33'}]}>
        <Text style={styles.welcome}>This is page Three!</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcomeButton}>Go back to page one</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});



export default class nav extends Component {
_renderScene(route, navigator) {
    if (route.id === 1) {
      return <PageOne navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    }else if (route.id === 3) {
      return <PageThree navigator={navigator} />
    }
  }

  _configureScene(route) {
    return CustomSceneConfig;
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene}
        configureScene={this._configureScene} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
    color: 'black',
  },
    welcomeButton: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  }
});

AppRegistry.registerComponent('nav', () => nav);
