import React from 'react';
import {Text, Button, View} from 'native-base';
import WingBlank from '@/components/WingBlank';
import Toast from '@/components/Modal/Toast';
import CreateWalletIcon from '@/assets/svg/icon_wallet_create.svg'; 
import {StyleSheet} from 'react-native';


class LogoTitle extends React.Component {
    render() {
      return (
        <CreateWalletIcon width={25} height={25}/>
      );
    }
  }

export default class PulsarWallet extends React.PureComponent {
    static navigationOptions = {
        headerTitle: () => <LogoTitle />,
    };

    render() {
        return (
            <WingBlank style={styles.container}>
                <CreateWalletIcon width={156} height={126}  style={styles.CreateWalletIcon}/>

                <View style={[styles.ButtonContainer, styles.CreateWalletButtonContainer]}>
                    <Button
                        block
                        style = {styles.CreateWalletButton}
                        onPress={() => {
                        this.props.navigation.navigate('NormalPinSetting');
                        }}>
                        <Text>创建钱包</Text>
                    </Button>
                </View>
              
                <View style={[styles.ButtonContainer, styles.ImportWalletButtonContainer]}>
                    <Button block
                        style = {styles.ImportWalletButton}
                        onPress={() => {
                        this.props.navigation.navigate('NormalPinSetting');
                        }}>
                        <Text style={styles.ImportWalletText}>导入钱包</Text>
                    </Button>
                </View>
            </WingBlank>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    CreateWalletIcon: {
        marginTop: (178-64),
    },
    ButtonContainer: {
        width: 165,
        height: 44,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    CreateWalletButtonContainer: {
        marginTop: 82,
    },
    CreateWalletButton: {
        backgroundColor: '#FF6D6D',
    },
    ImportWalletButtonContainer: {
        marginTop: 10,
    },
    ImportWalletButton: {
        backgroundColor: '#EEEEEE',
    },
    ImportWalletText: {
        color: '#AEAEAE',
        fontSize: 16,
    }


})