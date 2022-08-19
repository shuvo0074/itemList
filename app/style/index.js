import {Dimensions} from 'react-native';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const DimentionObj = {
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  FULL_WIDTH: Dimensions.get('screen').width,
  FULL_HEIGHT: Dimensions.get('screen').height,
  PADDING: 25,
  RADIUS: 10,
};

const FontObj = {
  fs7: 7,
  fs10: 10,
  fs12: 12,
  fs13: 13,
  fs14: 14,
  fs16: 16,
  fs18: 18,
  fs20: 20,
  fs22: 22,
  fs24: 24,
  fs26: 26,
  fs28: 28,
  fs30: 30,
  fs32: 32,
  fs36: 36,
  fs40: 40,
  fs50: 50,
  fs60: 60,
  fs70: 70,
  fw100: '100',
  fw200: '200',
  fw300: '300',
  fw400: '400',
  fw500: '500',
  fw600: '600',
  fw700: '700',
  fw800: '800',
  fw900: '900',
};

const families = {
  font_regular: 'Roboto-Regular',
  font_bold: 'Roboto-Bold',
  font_blackItalic: 'Roboto-BlackItalic',
  font_medium: 'Roboto-Medium',
  font_boldItalic: 'Roboto-BoldItalic',
  font_lightItalic: 'Roboto-LightItalic',
  font_mediumItalic: 'Roboto-MediumItalic',
  font_black: 'Roboto-Black',
  font_light: 'Roboto-Light',
  font_thin: 'Roboto-Thin',
  font_italic: 'Roboto-Italic',
};

const colors = {
  COLOR_LIGHT: '#dadada',
  COLOR_LIGHTER: '#eeeeee',
  COLOR_LIGHTEST: '#ffffff',
  COLOR_DARK: '#6C6C6C',
  COLOR_DARKER: '#2D2D2D',
  COLOR_DARKEST: '#000000',
  COLOR_RED: '#FF6264',
  COLOR_GREY: '#C4C4C4',
  COLOR_GREY_DISABLE: '#a1a1a1',
  COLOR_SUBMIT: '#9A41EA',
  COLOR_GREY_ACCENT: '#838383',
  COLOR_HOME: '#040C28',
};

const DarkStyles = {
  ...colors,
  ...DimentionObj,
  ...FontObj,
  ...families,
};

const LightStyles = {
  ...colors,
  ...DimentionObj,
  ...FontObj,
  ...families,
};

let GlobalStyles = LightStyles;

export const setTheme = (theme = 'LIGHT') => {
  GlobalStyles = theme === 'DARK' ? DarkStyles : LightStyles;
};

export default GlobalStyles;
