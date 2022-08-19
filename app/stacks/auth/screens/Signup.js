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
  TouchableOpacity,
} from 'react-native';

import {useDispatch} from 'react-redux';
import GlobalStyles from '../../../style';
import CustomTextInput from '../../../components/login/CustomTextInput';
import SubmitButton from '../../../components/login/SubmitButton';
import {PATHS} from '../../../const/paths';
import {checkValidityForInput} from '../../app/actions/commonActions';
import {assets} from '../../../assets';
import {login} from '../actions/authActions';
import {INITIAL_USER} from '../reducers';

const Signup: () => Node = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

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
            value={userName}
            setValue={txt => setUserName(txt)}
            checkValidity={checkValidityForInput}
            isRequired
            autoFocus
            customStyle={styles.textInputStyle}
            title="Username"
            placeholder="Username"
          />
          <CustomTextInput
            halfLength={true}
            value={phone}
            setValue={txt => setPhone(txt)}
            checkValidity={checkValidityForInput}
            isRequired
            customStyle={styles.textInputStyle}
            title="Phone no"
            placeholder="Phone no"
          />
        </View>
        <CustomTextInput
          value={address}
          setValue={txt => setAddress(txt)}
          checkValidity={checkValidityForInput}
          isRequired
          customStyle={styles.textInputStyle}
          title="Address"
          placeholder="Address"
        />

        <SubmitButton
          title="Signup"
          disabled={!userName.length || !address.length || !phone.length}
          onPress={() => {
            const flagUser = {...INITIAL_USER};
            // get userinfo from API
            flagUser.title = userName;
            flagUser.phone = phone;
            flagUser.address = address;

            dispatch(login(flagUser));
            navigation.navigate(PATHS.AppStack);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(PATHS.Login);
          }}>
          <Text style={styles.bottomText}>Already a user? Login</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between'
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

export default Signup;
