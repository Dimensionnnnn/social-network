import {ToastOptions} from 'react-native-toast-notifications';

export const toasterParamsError: ToastOptions = {
  type: 'danger',
  placement: 'top',
  duration: 3000,
  animationType: 'slide-in',
};

export const serverErrorMessage = 'Something went wrong!';
