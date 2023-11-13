import {isDateCorrect} from './isDateCorrect';

export const validateEmail = (email: string) => {
  const regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  return regexp.test(email) ? true : ErrorsMessages.email;
};

export const validatePassword = (password: string) => {
  return password.length > 3 ? true : ErrorsMessages.password;
};

export const validatePhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return true;
  }

  const regexp = new RegExp(/^(\+7)\d{10}$/);
  return regexp.test(phoneNumber) ? true : ErrorsMessages.phone;
};

export const validateDate = (date: Date) => {
  return isDateCorrect(date) ? true : ErrorsMessages.date;
};

export const validatePostDescription = (description: string) => {
  return description.length > 40 ? true : ErrorsMessages.description;
};

enum ErrorsMessages {
  email = 'Enter correct e-mail',
  password = 'Password field must be at leat 4 characters',
  phone = 'Enter correct phone number',
  date = 'Enter correct date',
  description = 'Enter minimum 40 characters',
}
