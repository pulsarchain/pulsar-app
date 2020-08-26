import React from 'react';
import ThemeProvider from '@/components/ThemeProvider';
import {Root} from 'native-base';
import AppRoot from '@/components/Modal/Root';
import {createAppContainer} from 'react-navigation';
import createStackNavigator from '@/components/createStackNavigator';
import Screens from '@/pages/screens';
import i18n from 'i18n-js';
import en from '@/locales/en-US';
import cn from '@/locales/zh-CN';
import AsyncStorage from '@react-native-community/async-storage';

const defaultLocale = 'en-US';
i18n.locale = defaultLocale;
i18n.fallbacks = true;
i18n.translations = {'zh-CN': cn, 'en-US': en};

const getStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('@STORAGE');
    let data = {};
    if (value !== null) {
      data = JSON.parse(value);
    }
    return data;
  } catch (e) {
    // error reading value
  }
};

const Storage = {
  update: async (value = {}) => {
    try {
      const data = await getStorage();
      const s = {...data, ...value};
      await AsyncStorage.setItem('@STORAGE', JSON.stringify(s));
      return s;
    } catch (e) {
      // saving error
    }
  },
  get: async () => await getStorage(),
};

const AppNavigator = createStackNavigator(Screens);
const AppContainer = createAppContainer(AppNavigator);

class App extends React.PureComponent {
  state = {
    locale: defaultLocale,
    storage: {},
  };

  async componentDidMount() {
    const storage = await Storage.get();
    this.setStorage(storage);
    if (storage && storage.locale) {
      this.setLocale(storage.locale);
    }
  }

  setLocale = locale => {
    Storage.update({locale});
    this.setState({locale});
  };

  t = (scope, options) => {
    return i18n.t(scope, {locale: this.state.locale, ...options});
  };

  setStorage(storage) {
    this.setState({storage});
  }

  updateStorage = async value => {
    const storage = await Storage.update(value);
    this.setState({storage});
    return storage;
  };

  render() {
    return (
      <ThemeProvider>
        <AppRoot>
          <Root>
            <AppContainer
              screenProps={{
                t: this.t,
                locale: this.state.locale,
                setLocale: this.setLocale,
                // 本地数据对象
                storage: this.state.storage,
                // 更新本地数据
                updateStorage: this.updateStorage,
              }}
            />
          </Root>
        </AppRoot>
      </ThemeProvider>
    );
  }
}

export default App;
