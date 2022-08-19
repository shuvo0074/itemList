/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  Text,
} from 'react-native';

import {useDispatch} from 'react-redux';
import GlobalStyles from '../../../style';
import CustomTextInput from '../../../components/login/CustomTextInput';
import SubmitButton from '../../../components/login/SubmitButton';
import {PATHS} from '../../../const/paths';
import {addProduct, checkValidityForInput} from '../actions/commonActions';
import {assets} from '../../../assets';
import {CATEGORY_LIST, PRODUCT_OBJECT} from '../reducers';
import {Dropdown} from 'react-native-element-dropdown';

const AddProduct: () => Node = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [amount, setamount] = useState('');
  const [description, setdescription] = useState('');
  const [category, setCategory] = useState(-1);
  const [isFocus, setIsFocus] = useState(false);

  const backgroundStyle = {
    backgroundColor: '#0c1955',
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground
        source={assets.login.loginBg}
        imageStyle={styles.bgImage}
        style={styles.bgContainer}>
        <View style={styles.flexRow}>
          <CustomTextInput
            halfLength={true}
            value={title}
            setValue={txt => setTitle(txt)}
            checkValidity={checkValidityForInput}
            isRequired
            autoFocus
            customStyle={styles.textInputStyle}
            title="Name"
            placeholder="Name"
          />
          <CustomTextInput
            halfLength={true}
            value={amount}
            setValue={txt => setamount(txt)}
            checkValidity={checkValidityForInput}
            isRequired
            customStyle={styles.textInputStyle}
            title="Amount"
            placeholder="Amount"
          />
        </View>
        <View style={styles.flexRow}>
          <CustomTextInput
            value={description}
            setValue={txt => setdescription(txt)}
            checkValidity={checkValidityForInput}
            customStyle={styles.textInputStyle}
            title="Description"
            halfLength
            placeholder="Description"
          />
          <View>
            <Text style={styles.titleTxt}>
              Category <Text style={styles.titleRequiredMark}>*</Text>
            </Text>
            <Dropdown
              value={category}
              data={CATEGORY_LIST}
              onChange={i => setCategory(i.id)}
              labelField="value"
              valueField="id"
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              placeholder={!isFocus ? 'Select item' : '...'}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </View>
        </View>

        <SubmitButton
          title="Add product"
          disabled={!title.length || !amount.length || category == -1}
          onPress={() => {
            const flagProduct = {...PRODUCT_OBJECT};

            flagProduct.title = title;
            flagProduct.quantity = amount;
            flagProduct.description = description;
            flagProduct.category = category;

            dispatch(addProduct(flagProduct));
            navigation.navigate(PATHS.Home);
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  titleRequiredMark: {
    fontSize: 25,
    color: 'red',
  },
  bgImage: {
    height: GlobalStyles.DEVICE_HEIGHT,
  },
  flexRow: {
    flexDirection: 'row',
    width: GlobalStyles.DEVICE_WIDTH,
    paddingHorizontal: GlobalStyles.PADDING,
    justifyContent: 'space-between',
  },
  bgContainer: {
    paddingHorizontal: GlobalStyles.PADDING,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: GlobalStyles.DEVICE_HEIGHT / 10,
  },
  textInputStyle: {
    marginBottom: GlobalStyles.PADDING,
  },
  bottomText: {
    color: GlobalStyles.COLOR_SUBMIT,
    marginTop: GlobalStyles.PADDING,
    textDecorationLine: 'underline',
    textDecorationColor: GlobalStyles.COLOR_SUBMIT,
  },
  titleTxt: {
    fontSize: GlobalStyles.fs20,
    color: GlobalStyles.COLOR_GREY,
  },
  dropdown: {
    height: 50,
    borderColor: '#3267F0',
    borderWidth: 0.5,
    borderRadius: 12,
    paddingHorizontal: 8,
    width: GlobalStyles.DEVICE_WIDTH / 2 - 40,
    height: 62,
    marginTop: 10,
  },
  selectedTextStyle: {
    fontSize: GlobalStyles.fs16,
    color: GlobalStyles.COLOR_GREY,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default AddProduct;
