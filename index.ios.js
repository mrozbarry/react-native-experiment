import React, { AppRegistry } from 'react-native'
import App from './src/App'

const RootIOS = React.createClass({
  render: function () {
    return (
      <App platform='ios' />
    )
  }
})

AppRegistry.registerComponent('experiment', () => RootIOS);
