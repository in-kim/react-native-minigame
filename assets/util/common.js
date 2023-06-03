import {Dimensions} from 'react-native';

export const fn = {
  accordingDeviceSize: (t, f) => {
    const deviceWidth = Dimensions.get('window').width;
    return deviceWidth < 380 ? t : f;
  }
}

export default fn