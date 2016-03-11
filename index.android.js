import React, { AppRegistry, Component } from 'react-native'
import App from './src/App'

class RootAndroid extends Component {
  render () {
    return (
      <App platform='android' />
    )
  }
}

AppRegistry.registerComponent('experiment', () => RootAndroid);
