import React from 'react';
import {StyleProvider} from 'native-base';
import getTheme from '@/native-base-theme/components';
import platform from '@/native-base-theme/variables/platform';

export default class ThemeProvider extends React.Component {
  render() {
    const {children} = this.props;
    return <StyleProvider style={getTheme(platform)}>{children}</StyleProvider>;
  }
}
