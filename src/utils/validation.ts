export const validateEmail = (email: string) => {
  const regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  return regexp.test(email) ? true : ErrorsMessages.email;
};

export const validatePassword = (password: string) => {
  return password.length > 3 ? true : ErrorsMessages.password;
};

enum ErrorsMessages {
  email = 'Enter correct e-mail',
  password = 'Password field must be at leat 4 characters',
}
