/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from 'react-native';
function AlertMessage({
  shouldShow,
  alertMessage,
  onPressOk,
}: {
  shouldShow: boolean;
  alertMessage: string;
  onPressOk: () => void;
}): JSX.Element {
  return (
    <Modal onBackdropPress={onPressOk} isVisible={shouldShow}>
      <View style={[styles.container, { backgroundColor: 'white' }]}>
        <View style={styles.messageContainer}>
          <Text>{alertMessage}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressOk}>
          <Text>Ok</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

AlertMessage.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  alertMessage: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'column',
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 3,
    padding: '5%',
  },
  messageText: {
    textAlign: 'center',
  },
  button: {
    flex: 1,
    borderTopWidth: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
  },
});

export default AlertMessage;
