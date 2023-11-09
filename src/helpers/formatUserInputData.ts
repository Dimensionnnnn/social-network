import {UserInputDataSubmitProps} from 'src/screens/profile/profile';
import {EditProfileRequest} from 'src/shared/types/__generated__/gql-types';
import dayjs from 'dayjs';

export const formatUserInputData = (
  userInputData: UserInputDataSubmitProps,
) => {
  const formatData: EditProfileRequest = {
    email: userInputData?.email,
    ...(userInputData?.firstName && {firstName: userInputData.firstName}),
    ...(userInputData?.lastName && {lastName: userInputData.lastName}),
    ...(userInputData?.middleName && {middleName: userInputData.middleName}),
    ...(userInputData?.gender && {gender: userInputData.gender}),
    ...(userInputData?.country && {country: userInputData.country}),
    ...(userInputData?.phone && {phone: userInputData.phone}),
    ...(userInputData?.birthDate && {
      birthDate: dayjs(userInputData?.birthDate).format('YYYY-MM-DD'),
    }),
    ...(userInputData?.avatarUrl && {avatarUrl: userInputData.avatarUrl}),
  };

  return formatData;
};
