import React, {Component} from 'react';
import {Modal, View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './style';
import InfoIcon from '@/assets/svg/info.svg';
import ErrorIcon from '@/assets/svg/error.svg';

const getIcon = type => {
  let Icon = null;
  if (type === 'info') {
    Icon = InfoIcon;
  }
  if (type === 'error') {
    Icon = ErrorIcon;
  }
  return Icon ? <Icon width={36} height={36} style={styles.icon} /> : Icon;
};

export default class Toast extends Component {
  static toastInstance;
  static show({...config}) {
    this.toastInstance.showToast({config});
  }
  static loading({...config}) {
    config = {...config, type: 'loading', duration: 0};
    this.toastInstance.showToast({config});
  }
  static hide() {
    this.toastInstance.closeToast('closed');
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      content: '',
      duration: 1500,
      onClose: function() {},
      type: '',
      mask: false,
    };
  }

  showToast({config}) {
    this.setState({
      visible: true,
      content: config.content,
      duration: config.duration,
      onClose: config.onClose,
      type: config.type,
      mask: config.mask,
    });
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    if (config.duration !== 0) {
      const duration = config.duration > 0 ? config.duration : 1500;
      this.closeTimeout = setTimeout(
        this.closeToast.bind(this, 'timeout'),
        duration,
      );
    }
  }
  closeToast(reason) {
    this.setState({
      visible: false,
    });
    const {onClose} = this.state;
    if (onClose && typeof onClose === 'function') {
      onClose(reason);
    }
  }

  render() {
    const {mask, visible, content, type} = this.state;

    const wrap = {
      ...styles.wrap,
      backgroundColor: mask ? 'rgba(0, 0, 0, 0.3)' : '',
    };
    return (
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={wrap}>
          <SafeAreaView>
            <View style={styles.content}>
              {getIcon(type)}
              {type === 'loading' && (
                <ActivityIndicator
                  color="white"
                  size="large"
                  style={styles.icon}
                />
              )}
              {content && <Text style={styles.text}>{content}</Text>}
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    );
  }
}
