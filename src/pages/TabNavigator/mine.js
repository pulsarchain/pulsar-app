import React from 'react';
import {View, Text} from 'native-base';
import createStackNavigator from '@/components/createStackNavigator';

class Mine extends React.PureComponent {
  componentDidMount() {
    const s = this.props.screenProps.storage;
    console.log('mine', s);
  }
  render() {
    return (
      <View>
        <Text>Mine</Text>
      </View>
    );
  }
}

export default createStackNavigator({Mine});
