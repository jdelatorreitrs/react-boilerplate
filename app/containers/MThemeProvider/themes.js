import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors';
import { spacing } from 'material-ui/styles';

export const theme1 = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.pinkA200,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
};

export const theme2 = {
  ...spacing,
  fontFamily: 'sans-serif',
  palette: {
    primary1Color: Colors.cyan700,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.grey400,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
    clockCircleColor: fade(Colors.darkBlack, 0.07),
    shadowColor: Colors.fullBlack,
  }
};
