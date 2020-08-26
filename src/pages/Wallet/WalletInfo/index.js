import React, {PureComponent} from 'react';
import {View, StyleSheet, Platform, Touchable} from 'react-native';
import {Text, Col, Grid} from 'native-base';
import WingBlank from '@/components/WingBlank';
import Wt from '@/assets/svg/wt.svg';
import Logo from '@/assets/svg/logo.svg';
import Qrcode from '@/assets/svg/ewm.svg';
import Copy from '@/assets/svg/fz1.svg';
import Zy from '@/assets/svg/wallet/zy.svg';
import By from '@/assets/svg/wallet/by.svg';

const styles = StyleSheet.create({
  back: {
    marginRight: Platform.OS === 'ios' ? 16 : 0,
    marginLeft: Platform.OS === 'ios' ? 8 : 0,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FF6F6F',
    paddingHorizontal: 15,
    paddingVertical: 23,
  },
  headerLeft: {
    width: 50,
  },
  headerRight: {
    paddingLeft: 15,
  },
  coinTitle: {
    fontSize: 18,
    color: '#fff',
  },
  secondLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  secondLineText: {
    color: '#FFEAEA',
    fontSize: 12,
  },
  thirdLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thirdLineText: {
    fontSize: 12,
  },
});

export default class WalletInfo extends PureComponent {
  static navigationOptions = {
    title: '波霎链',
    headerRight: <Wt style={styles.back} width={19} height={19} />,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WingBlank>
        <View style={styles.header}>
          <Grid>
            <Col style={styles.headerLeft}>
              <Logo width={50} height={50} />
            </Col>
            <Col style={styles.headerRight}>
              <View>
                <Text style={styles.coinTitle}>PUL-Wallet</Text>
              </View>
              <View style={styles.secondLine}>
                <Text style={styles.secondLineText}>0xB69A9f86…886645d56A</Text>
                <Touchable>
                  <Qrcode width={15} height={16} />
                </Touchable>
                <Touchable>
                  <Copy width={15} height={15.5} />
                </Touchable>
              </View>
              <View style={styles.thirdLine}>
                <Text style={styles.thirdLineText}>冷钱包资产</Text>
                <Zy style={styles.back} width={11} height={10} />
                <By style={styles.back} width={11} height={10} />
              </View>
              <View>
                <Text>348.8978</Text>
              </View>
            </Col>
          </Grid>
        </View>
      </WingBlank>
    );
  }
}
