import React from 'react';
import {Text, Button, View} from 'native-base';
import WingBlank from '@/components/WingBlank';
import Toast from '@/components/Modal/Toast';
import CreateWalletIcon from '@/assets/svg/icon_wallet_create.svg'; 
import {StyleSheet, TouchableOpacity} from 'react-native';
import Theme from '@/utils/theme'
import Captcha from '@/components/Captcha/index'


export default class NormalPinSetting extends React.PureComponent {

    render() {
        return (
            <WingBlank style={styles.container}>
                <Text style = {styles.SettingTitle}>设置 PIN 码</Text>

                <Text style={styles.contentText} >• 在开启钱包之前，请您先设置 PIN 码，PIN 码会用于解锁钱包和完成交易，保障您的资金安全。</Text>

                <Text style={styles.contentText} >• PIN 码属于本地密码，请您妥善保存，一经丢失，无法恢复。</Text>

                <View style = {styles.captchaContainer}>
                    <Captcha onFinished = {(s) => {
                        console.log('s = ', s)
                    }} >
                    </Captcha>
                </View>

                <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.heightLevelPin}>设置高级 PIN 码</Text>
                    </View>
                </TouchableOpacity>

            </WingBlank>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    SettingTitle: {
        color: Theme.headingColor,
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 14,
        marginBottom: 20,
    },
    contentText: {
        color: Theme.textInfoColor,
        fontSize: Theme.fontSize12,
        marginTop: 10,
    },
    captchaContainer: {
        marginTop: 65,
        
    },
    heightLevelPin: {
        paddingTop: 17,
        color: '#34D5A5',
        fontSize: 12,
    }


})