import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../style';

export default function SubmitButton({
  disabled = false,
  title = '',
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.btnContainer(disabled)}
      onPress={onPress}>
      <Text style={styles.btnTxt(disabled)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: disabled => ({
    backgroundColor: disabled ? GlobalStyles.COLOR_GREY_DISABLE : GlobalStyles.COLOR_SUBMIT,
    height: 48,
    width: 174,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 10,
  }),
  btnTxt: disable => ({
    color: disable ? GlobalStyles.COLOR_DARK : GlobalStyles.COLOR_LIGHTEST,
    fontSize: 14,
    fontWeight: '600',
  }),
});
