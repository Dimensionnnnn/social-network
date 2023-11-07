export const formatAuthorName = (firstName: string, lastName: string) => {
  if (firstName && lastName) {
    return `${firstName} ${lastName[0]}.`;
  }
};
