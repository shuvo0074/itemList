import React, {useState} from 'react';
import {
  TextInput,
  Dimensions,
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {assets} from '../../assets';
import GlobalStyles from '../../style';

export const INPUT_STATES = {
  BLURRED: 'BLURRED',
  FOCUSED: 'FOCUSED',
  ERROR: 'ERROR',
  ACCEPTED: 'ACCEPTED',
};

export default function CustomTextInput({
  autoFocus,
  isRequired,
  value,
  setValue,
  checkValidity,
  title = '',
  placeholder = '',
  secureTextEntry = false,
  halfLength = false,
}) {
  const [inputState, setInputState] = useState(INPUT_STATES.BLURRED);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  return (
    <View>
      {/* Title */}
      <Text style={styles.titleTxt}>
        {title}{' '}
        {isRequired ? <Text style={styles.titleRequiredMark}>*</Text> : null}
      </Text>

      {/* textinput container */}
      <View style={styles.textInpContainer(inputState, halfLength)}>
        <TextInput
          secureTextEntry={secureTextEntry}
          selectTextOnFocus
          placeholder={placeholder}
          autoFocus={autoFocus}
          onFocus={() => setInputState(INPUT_STATES.FOCUSED)}
          value={value}
          onBlur={() => {
            if (isRequired && (!value || value?.length <= 0)) {
              setErrorMessage('Field is required');
              setInputState(INPUT_STATES.ERROR);
            } else {
              dispatch(checkValidity()) // check if input is valid from API
                .then(() => setInputState(INPUT_STATES.ACCEPTED))
                .catch(e => {
                  setErrorMessage(e.message);
                  setInputState(INPUT_STATES.ERROR);
                });
            }
          }}
          onChangeText={setValue}
          style={styles.textInput(halfLength)}
        />

        {/* container for tick icon if input is ACCEPTED */}
        <View style={styles.rightIconContainer}>
          {inputState === INPUT_STATES.ACCEPTED ? (
            <Image source={assets.login.icCorrect} style={styles.rightIcon} />
          ) : null}
        </View>
      </View>

      {/* error container */}
      <View style={styles.errorCont}>
        {inputState === INPUT_STATES.ERROR ? (
          <ImageBackground style={styles.errorBG} source={assets.login.errorBg}>
            <Text style={styles.errorTxt}>{errorMessage}</Text>
          </ImageBackground>
        ) : null}
      </View>
    </View>
  );
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  errorCont: {
    height: 30,
  },
  errorTxt: {
    color: 'red',
    marginTop: 5,
  },
  errorBG: {
    height: 27,
    width: 130,
    marginTop: 3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTxt: {
    fontSize: GlobalStyles.fs20,
    color: GlobalStyles.COLOR_GREY,
  },
  titleRequiredMark: {
    fontSize: GlobalStyles.fs26,
    color: 'red',
  },
  textInpContainer: (inputState, halfLength) => ({
    borderWidth:
      inputState === INPUT_STATES.ERROR || inputState === INPUT_STATES.FOCUSED
        ? 1
        : 0,
    borderColor: inputState === INPUT_STATES.ERROR ? '#FF0000' : '#3267F0',
    width: halfLength ? width / 2 - 40 : width - 50,
    alignSelf: 'center',
    borderRadius: 12,
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: GlobalStyles.PADDING / 2,
  }),
  textInput: halfLength => ({
    backgroundColor: GlobalStyles.COLOR_LIGHTEST,
    opacity: 0.25,
    width: halfLength ? width / 2 - 70 : width - 80,
    height: 64,
    paddingLeft: 25,
    color: 'black',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  }),
  rightIconContainer: {
    width: 30,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    // backgroundColor: '#446374',
    backgroundColor: GlobalStyles.COLOR_LIGHTEST,
    opacity: 0.25,
    height: 64,
    justifyContent: 'center',
  },
  rightIcon: {
    height: 16,
    width: 16,
  },
});
