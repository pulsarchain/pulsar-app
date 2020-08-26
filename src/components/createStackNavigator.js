import React from 'react';
import {
  createStackNavigator as StackNavigator,
  StackViewStyleInterpolator,
} from 'react-navigation-stack';
import {StyleSheet, Platform} from 'react-native';
import Back from '@/assets/svg/back.svg';

const styles = StyleSheet.create({
  back: {
    marginRight: Platform.OS === 'ios' ? 8 : 0,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
  },
});

const defaultConfig = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerBackImage: <Back style={styles.back} width={10} height={18} />,
    headerBackTitle: null,
    headerBackTitleStyle: {
      color: '#222222',
    },
    headerStyle: {
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
  },
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  }),
};

const createStackNavigator = (routeConfigMap, stackConfig) => {
  const Config = {
    ...defaultConfig,
    ...stackConfig,
  };
  return StackNavigator(routeConfigMap, Config);
};

export default createStackNavigator;
