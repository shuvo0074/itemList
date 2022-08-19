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

const Login: () => Node = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

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
        <CustomTextInput
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
          value={password}
          setValue={txt => setPassword(txt)}
          checkValidity={checkValidityForInput}
          isRequired
          secureTextEntry
          customStyle={styles.textInputStyle}
          title="Password"
          placeholder="Password"
        />
        <SubmitButton
          title="Login"
          disabled={!userName.length || !password.length}
          onPress={() => {
            const flagUser = {...INITIAL_USER};
            // get userinfo from API
            flagUser.title = userName;
            flagUser.phone = 123;
            flagUser.address = 'Bangladesh';

            dispatch(login(flagUser));
            navigation.navigate(PATHS.AppStack);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(PATHS.Signup);
          }}>
          <Text style={styles.bottomText}>New user? Signup</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    height: GlobalStyles.DEVICE_HEIGHT,
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

export default Login;
