import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {assets} from '../../assets';
import GlobalStyles from '../../style';

export default function SharedList() {
  return (
    <View style={styles.titleRow}>
      <Text numberOfLines={3} style={styles.titleTxt}>
        Shared with
      </Text>
      <View style={styles.personList}>
        {[0, 1, 2, 3].map(i => (
          <Image
            key={i}
            source={
              !i ? assets.home.addUser : {uri: 'https://picsum.photos/200'}
            }
            style={styles.avatar}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#373d53',
    paddingBottom: GlobalStyles.PADDING /2,
    marginTop: GlobalStyles.PADDING /2,
    justifyContent: 'space-between',
    width: GlobalStyles.DEVICE_WIDTH ,
    paddingHorizontal: GlobalStyles.PADDING + 10
  },
  titleTxt: {
    fontSize: GlobalStyles.fs12,
    fontWeight: GlobalStyles.fw200,
    color: '#fff',
    width: GlobalStyles.DEVICE_WIDTH / 6,
  },
  personList: {
    flexDirection: 'row',
    width: GlobalStyles.DEVICE_WIDTH / 2,
    justifyContent: 'space-evenly'
  },
  avatar: {
    height: GlobalStyles.PADDING,
    width: GlobalStyles.PADDING,
    borderRadius: GlobalStyles.PADDING / 2
  },
});
