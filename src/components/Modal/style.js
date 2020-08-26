import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrap: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    alignItems: 'stretch',
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
    minWidth: 60,
    maxWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  icon: {
    marginBottom: 8,
  },
  modalContent: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    minHeight: 60,
    padding: 30,
  },
  btns: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    // flex: 1,
  },
  emptyBtn: {
    width: 20,
  },
  textColor: {
    color: '#fff',
  },
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  title: {
    color: '#222222',
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  body: {
    marginBottom: 30,
    color: '#222222',
    fontSize: 16,
    textAlign: 'center',
  },
});
