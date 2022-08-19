import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GlobalStyles from '../../style';

export default function ItemListHeader({username,onPressRight}) {
  return (
    <View style={styles.titleRow}>
      <Text numberOfLines={3} style={styles.titleTxt}>
        Welcome {username}
      </Text>
      <View style={styles.headerPill}>
        <Text numberOfLines={3} style={styles.pillTxt}>
          Items To Buy
        </Text>
      </View>
      <TouchableOpacity
        onPress={onPressRight}
      >
        <Text numberOfLines={3} style={styles.addTxt}>
          Add Product
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#373d53',
    paddingBottom: GlobalStyles.PADDING / 2,
    marginTop: GlobalStyles.PADDING,
    justifyContent: 'space-evenly',
  },
  titleTxt: {
    fontSize: GlobalStyles.fs12,
    fontWeight: GlobalStyles.fw200,
    color: '#fff',
    width: GlobalStyles.DEVICE_WIDTH / 6,
  },
  addTxt: {
    fontSize: GlobalStyles.fs12,
    fontWeight: GlobalStyles.fw700,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  headerPill: {
    backgroundColor: '#1c243d',
    padding: GlobalStyles.PADDING / 4,
    paddingHorizontal: GlobalStyles.PADDING / 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillTxt: {
    fontSize: GlobalStyles.fs18,
    fontWeight: '600',
    color: 'grey',
  },
});
