import React from 'react';
import {Text, Button, View, Content, Container} from 'native-base';
import createStackNavigator from '@/components/createStackNavigator';
import WingBlank from '@/components/WingBlank';
import BoxShadow from '@/components/BoxShadow';

class Home extends React.PureComponent {
  static navigationOptions = {title: 'Pulsar'};

  render() {
    return (
      <Content style={{backgroundColor: 'white'}}>
        <WingBlank>
          <BoxShadow>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
              }}>
              <Button
                onPress={() => {
                  this.props.navigation.navigate('Demo');
                }}>
                <Text>demo</Text>
              </Button>
            </View>
          </BoxShadow>
        </WingBlank>
      </Content>
    );
  }
}

export default createStackNavigator({Home});
