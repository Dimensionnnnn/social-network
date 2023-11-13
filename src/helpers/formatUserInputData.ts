import {UserInputDataSubmitProps} from 'src/screens/profile/profile';
import {EditProfileRequest} from 'src/shared/types/__generated__/gql-types';
import dayjs from 'dayjs';

export const formatUserInputData = (
  userInputData: UserInputDataSubmitProps,
) => {
  const formatData: EditProfileRequest = {
    email: userInputData?.email,
    firstName: userInputData?.firstName ?? '',
    lastName: userInputData?.lastName ?? '',
    middleName: userInputData?.middleName ?? '',
    gender: userInputData?.gender,
    country: userInputData?.country ?? '',
    birthDate: dayjs(userInputData?.birthDate).format('YYYY-MM-DD') ?? '',
    ...(userInputData?.phone && {phone: userInputData?.phone}),
    ...(userInputData?.avatarUrl && {avatarUrl: userInputData?.avatarUrl}),
  };

  return formatData;
};
