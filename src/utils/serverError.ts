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

export const showToast = ({
  type = 'danger',
  message = serverErrorMessage,
}: Partial<ShowToastProps> = {}) => {
  Toast.show(message, {
    type: type,
    ...toasterParamsError,
  });
};
