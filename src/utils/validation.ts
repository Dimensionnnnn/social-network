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
  const currentDate = new Date();
  const minDate = new Date(1900, 0, 1);

  return date <= currentDate && date >= minDate ? true : ErrorsMessages.date;
};

enum ErrorsMessages {
  email = 'Enter correct e-mail',
  password = 'Password field must be at leat 4 characters',
  phone = 'Enter correct phone number',
  date = 'Enter correct date',
}
