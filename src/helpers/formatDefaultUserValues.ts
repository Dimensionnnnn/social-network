import {UserMe} from 'src/api/user/gql/querys/__generated__/user-me.query';
import {GenderType} from 'src/shared/types/__generated__/gql-types';

type UserInputData = UserMe['userMe'];

export const formatDefaultUserValues = (user?: UserInputData) => {
  const userBirthDate = user?.birthDate
    ? new Date(user?.birthDate)
    : new Date();

  const userAvatarUrl = user?.avatarUrl ?? undefined;

  const userGender =
    user?.gender && user?.gender === 'FEMALE'
      ? GenderType.Female
      : GenderType.Male;

  return {
    firstName: user?.firstName ?? '',
    lastName: user?.lastName ?? '',
    middleName: user?.middleName ?? '',
    gender: userGender,
    birthDate: userBirthDate,
    email: user?.email ?? '',
    phone: user?.phone ?? '',
    country: user?.country ?? '',
    avatarUrl: userAvatarUrl,
  };
};
