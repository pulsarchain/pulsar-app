import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Toast from './Toast';
import Modal from './index';

const styles = StyleSheet.create({
  view: {flex: 1},
});

class Root extends Component {
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.props} style={styles.view}>
        {this.props.children}
        <Toast
          ref={c => {
            if (c) {
              Toast.toastInstance = c;
            }
          }}
        />
        <Modal
          ref={c => {
            if (c) {
              Modal.modalInstance = c;
            }
          }}
        />
      </View>
    );
  }
}

export default Root;
