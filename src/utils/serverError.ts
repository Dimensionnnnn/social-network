import {Toast, ToastOptions} from 'react-native-toast-notifications';

const toasterParamsError: ToastOptions = {
  placement: 'top',
  duration: 3000,
  animationType: 'slide-in',
};

const serverErrorMessage = 'Something went wrong!';

interface ShowToastProps {
  type?: 'normal' | 'success' | 'danger' | 'warning' | string;
  message?: string;
}

export const showToast = ({type, message}: ShowToastProps) => {
  Toast.show(message ? message : serverErrorMessage, {
    type: type ? type : 'normal',
    ...toasterParamsError,
  });
};
