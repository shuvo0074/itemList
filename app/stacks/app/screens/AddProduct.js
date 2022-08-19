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
} from 'react-native';

import {useDispatch} from 'react-redux';
import GlobalStyles from '../../../style';
import CustomTextInput from '../../../components/login/CustomTextInput';
import SubmitButton from '../../../components/login/SubmitButton';
import {PATHS} from '../../../const/paths';
import {addProduct, checkValidityForInput} from '../actions/commonActions';
import {assets} from '../../../assets';
import {PRODUCT_OBJECT} from '../reducers';

const AddProduct: () => Node = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [amount, setamount] = useState('');
  const [description, setdescription] = useState('');

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
        <CustomTextInput
          value={description}
          setValue={txt => setdescription(txt)}
          checkValidity={checkValidityForInput}
          customStyle={styles.textInputStyle}
          title="Description"
          placeholder="Description"
        />

        <SubmitButton
          title="Add product"
          disabled={!title.length || !amount.length}
          onPress={() => {
            const flagProduct = {...PRODUCT_OBJECT};
            // get userinfo from API
            flagProduct.title = title;
            flagProduct.quantity = amount;
            flagProduct.description = description;

            dispatch(addProduct(flagProduct));
            navigation.navigate(PATHS.Home);
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default AddProduct;
