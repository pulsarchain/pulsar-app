import React, {Component} from 'react';
import {
  View,
  Modal as RNModal,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import WingBlank from '../WingBlank';
import {Button, Text} from 'native-base';
import CloseIcon from '@/assets/svg/close.svg';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';

export default class Modal extends Component {
  static modalInstance;

  static show({...config}) {
    this.modalInstance.showModal({config});
  }

  static hide() {
    this.modalInstance.closeModal();
  }

  showModal({config}) {
    this.setState({
      visible: true,
      closable: config.closable,
      content: config.content,
      title: config.title,
      onClose: config.onClose,
      maskClosable: config.maskClosable,
      okText: config.okText,
      onOk: config.onOk,
      cancelText: config.cancelText,
      onCancel: config.onCancel,
      cancelButton: config.cancelButton,
      okButton: config.okButton,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  closeModal(reason) {
    this.setState({
      visible: false,
    });
    const {onClose} = this.state;
    if (onClose && typeof onClose === 'function') {
      onClose(reason);
    }
  }

  render() {
    const {
      maskClosable = false,
      closable = false,
      visible,
      content,
      title,
      cancelButton = true,
      okButton = true,
      cancelText,
      okText,
    } = this.state;
    const ModalContent = () => {
      if (isString(content)) {
        return <Text style={styles.body}>{content}</Text>;
      }
      if (isFunction(content)) {
        return <View>{content()}</View>;
      }
      if (isObject(content)) {
        return content;
      }
      return <View />;
    };
    return (
      <RNModal animationType="fade" transparent={true} visible={visible}>
        <WingBlank style={styles.wrap}>
          <TouchableOpacity
            style={styles.mask}
            activeOpacity={1}
            onPress={() => {
              if (maskClosable) {
                this.closeModal();
              }
            }}
          />
          <SafeAreaView>
            <View style={styles.modalContent}>
              {closable && (
                <TouchableOpacity
                  style={styles.close}
                  activeOpacity={1}
                  onPress={() => {
                    this.closeModal();
                  }}>
                  <CloseIcon width={14} height={14} />
                </TouchableOpacity>
              )}
              {title && <Text style={styles.title}>{title}</Text>}
              {content && <ModalContent />}
              <View style={styles.btns}>
                {cancelButton && (
                  <>
                    <Button
                      bordered
                      style={styles.button}
                      onPress={() => {
                        this.closeModal('cancel');
                      }}>
                      <Text>{cancelText}</Text>
                    </Button>
                    <View style={styles.emptyBtn} />
                  </>
                )}
                {okButton && (
                  <Button
                    primary
                    style={styles.button}
                    onPress={() => {
                      this.closeModal('ok');
                    }}>
                    <Text style={styles.textColor}>{okText}</Text>
                  </Button>
                )}
              </View>
            </View>
          </SafeAreaView>
        </WingBlank>
      </RNModal>
    );
  }
}
