/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import {useDispatch} from 'react-redux';
import ItemListHeader from '../../../components/home/ItemListHeader';
import ListItem from '../../../components/home/ListItem';
import GlobalStyles from '../../../style';
import {CATEGORY_LIST} from '../reducers';

const {height} = Dimensions.get('screen');

const Result: () => Node = ({navigation}) => {
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: GlobalStyles.COLOR_HOME,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ItemListHeader username={'Shuvo'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.scrollContainer}>
        {CATEGORY_LIST.map((category, index) => (
          <ListItem item={category} index={index} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    minHeight: height,
  },
});

export default Result;
