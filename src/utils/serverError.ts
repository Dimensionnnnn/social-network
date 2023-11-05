import {ToastOptions} from 'react-native-toast-notifications';

const toasterParamsError: ToastOptions = {
  type: 'danger',
  placement: 'top',
  duration: 3000,
  animationType: 'slide-in',
};

const serverErrorMessage = 'Something went wrong!';

type ShowToastFunction = (message: string, params: ToastOptions) => void;

let showToastFunction: ShowToastFunction | null = null;

export const setToastFunction = (showToast: ShowToastFunction) => {
  showToastFunction = showToast;
};

export const showServerError = (message?: string) => {
  if (showToastFunction) {
    showToastFunction(
      message ? message : serverErrorMessage,
      toasterParamsError,
    );
  }
};
