import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './home';
import Follow from './follow';
import Mine from './mine';
import HomeInactive from '@/assets/svg/home.svg';
import HomeActive from '@/assets/svg/home_active.svg';
import FollowInactive from '@/assets/svg/follow.svg';
import FollowActive from '@/assets/svg/follow_active.svg';
import MineInactive from '@/assets/svg/mine.svg';
import MineActive from '@/assets/svg/mine_active.svg';

const icons = {
  Home: {
    inactive: HomeInactive,
    active: HomeActive,
  },
  Follow: {
    inactive: FollowInactive,
    active: FollowActive,
  },
  Mine: {
    inactive: MineInactive,
    active: MineActive,
  },
};

const getIcon = (routeName, focused) => {
  if (icons[routeName]) {
    const type = focused ? 'active' : 'inactive';
    const Icon = icons[routeName][type];
    return <Icon width={22} height={22} />;
  }
};

const getTabLabel = (routeName, t) => {
  const labels = {
    Home: t('tab_home'),
    Follow: t('tab_follow'),
    Mine: t('tab_mine'),
  };
  return labels[routeName];
};

const TabNavigator = createBottomTabNavigator(
  {Home, Follow, Mine},
  {
    defaultNavigationOptions: ({navigation, screenProps}) => ({
      tabBarLabel: getTabLabel(navigation.state.routeName, screenProps.t),
      tabBarIcon: ({focused}) => {
        return getIcon(navigation.state.routeName, focused);
      },
    }),
    tabBarOptions: {
      activeTintColor: '#222222',
      inactiveTintColor: '#AEAEAE',
      style: {
        borderTopColor: 'transparent',
        shadowColor: '#E4E4E4',
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 10,
      },
    },
  },
);

TabNavigator.navigationOptions = {
  headerShown: false,
};

export default TabNavigator;
