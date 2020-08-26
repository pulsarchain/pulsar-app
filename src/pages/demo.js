import React from 'react';
import {Text, Button, View} from 'native-base';
import WingBlank from '@/components/WingBlank';
import BoxShadow from '@/components/BoxShadow';
import Toast from '@/components/Modal/Toast';
import Modal from '@/components/Modal';
import Captcha from '@/components/Captcha';

class Demo extends React.PureComponent {
  static navigationOptions = {title: 'Pulsar'};
  render() {
    const content =
      '我再看看我再看看我再看看我再看看我再看看我再看看我再看看我再看看我再看看我再看看我再看看我再看看';
    return (
      <WingBlank>
        <View
          style={{
            height: 100,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Button
            onPress={() => {
              // type: info,error
              // Toast.show({
              //   type: 'error',
              //   content: '两次输入的密码不一致， 请重试',
              // });
              Toast.loading({content: '加载中...'});
              setTimeout(() => {
                Toast.show({content: '加载成功'});
                // Toast.hide()
              }, 2000);
            }}>
            <Text>Show Toast</Text>
          </Button>
          <Button
            bordered
            onPress={() => {
              Modal.show({
                content,
                // title: '编辑昵称',
                okText: '前往充值',
                cancelText: '我再看看',
                // maskClosable: true,
                // closable: true,
                // cancelButton: false,
                // okButton: false,
              });
            }}>
            <Text>Show Modal</Text>
          </Button>
        </View>
        <View style={{width: 200}}>
          <Captcha
            onFinished={value => {
              console.log('Captcha Finished', value);
            }}
          />
        </View>
      </WingBlank>
    );
  }
}

export default Demo;
