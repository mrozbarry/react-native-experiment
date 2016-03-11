'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native'

import StatusToggler from './views/StatusToggler'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

const App = React.createClass({
  getInitialState: function () {
    return {
      colour: 'red'
    }
  },

  toggleColour: function (value) {
    this.setState({ colour: value ?  'transparent' : 'red' })
  },

  componentWillMount: function () {
    this.loadState()
    console.warn('Stuff')
  },

  componentWillUpdate: function (nextProps, nextState) {
    this.saveState(nextState)
  },

  componentWillUnmount: function () {
    this.saveState(this.state)
    console.error('FUCK')
  },

  loadState: function () {
    AsyncStorage.getItem('appState', (err, result) => {
      if (err) {
        return
      }

      if (result) {
        this.setState(JSON.parse(result))
      }
    })
  },

  saveState: function (state) {
    AsyncStorage.setItem('appState', JSON.stringify(state))
  },


  render: function () {
    return (
      <View style={ styles.container }>
        <Text style={styles.welcome}>
          Welcome to React Native from { this.props.platform }!
        </Text>
        <StatusToggler
          toggleColour={ this.toggleColour }
          colour={ this.state.colour }
          />
      </View>
    )
  }
})

export default App
