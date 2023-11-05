export const formatAuthorName = (firstName: string, lastName: string) => {
  if (firstName && lastName) {
    const partLastName = ` ${lastName[0]}.`;
    return firstName.concat(partLastName);
  }
};
