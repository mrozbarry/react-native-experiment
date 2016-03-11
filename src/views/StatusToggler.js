'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Switch
} from 'react-native'

const StatusToggler = React.createClass({
  render: function () {
    return (
      <View>
        <StatusBar backgroundColor={ this.props.colour } />
        <Switch
          onValueChange={ this.props.toggleColour }
          value={ this.props.colour === 'transparent' }
          />
      </View>
    )
  }
})

export default StatusToggler
