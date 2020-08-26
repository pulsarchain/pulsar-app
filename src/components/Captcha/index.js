import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, Keyboard} from 'react-native';
import {View, Item, Input, Text} from 'native-base';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // 透明度初始值设为0

  useEffect(() => {
    const cursor = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    });
    Animated.loop(cursor).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default ({
  value = '',
  autoFocus = true,
  maxLength = 6,
  password = true,
  onChange = () => {},
  onFinished = () => {},
}) => {
  const codes = Array.from({length: maxLength});
  const [val, setVal] = useState('');
  useEffect(() => {
    setVal(value);
  }, [value]);

  const inputs = val.split('');
  const handleChange = v => {
    onChange(v);
    setVal(v);
    if (v.length === maxLength) {
      onFinished(v);
      Keyboard.dismiss();
    }
  };

  const CursorView = ({i}) => {
    const length = inputs.length;
    return (!length && !i) || (length && length === i) ? (
      <FadeInView style={styles.fade}>
        <View style={styles.cursor} />
      </FadeInView>
    ) : null;
  };

  return (
    <View>
      <Item style={styles.captcha}>
        <View style={styles.codebox}>
          {codes.map((_, i) => (
            <View key={i} style={styles.code}>
              {inputs[i] && password ? (
                <View style={styles.dot} />
              ) : (
                <Text>{inputs[i]}</Text>
              )}
              <CursorView i={i} />
            </View>
          ))}
        </View>
        <Input
          keyboardType="number-pad"
          autoFocus={autoFocus}
          maxLength={maxLength}
          caretHidden={true}
          style={styles.input}
          value={val}
          onChangeText={handleChange}
        />
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  fade: {position: 'absolute'},
  input: {color: 'transparent'},
  captcha: {
    position: 'relative',
    borderBottomWidth: 0,
  },
  codebox: {
    position: 'absolute',
    top: 0,
    left: -8,
    right: -8,
    bottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  code: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#dcdcdc',
  },
  cursor: {
    backgroundColor: '#318CF2',
    width: 2,
    height: 20,
  },
  dot: {
    backgroundColor: '#000',
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
