export const formatUserName = (
  firstName?: string | null,
  lastName?: string | null,
) => {
  if (firstName && lastName) {
    return `${firstName} ${lastName[0]}.`;
  }
};
