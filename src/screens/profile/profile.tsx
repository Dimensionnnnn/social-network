import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {SvgArrowLeft} from 'src/shared/icons/components/arrow-left-svg';
import {Button} from 'src/components/UI/button/button-icon/button-icon';
import {Button as IconButtonBg} from 'src/components/UI/button/button-icon-bg/button-icon-bg';
import {Button as TextButton} from 'src/components/UI/button/text-button/text-button';
import {Input} from 'src/components/UI/input/default-input/default-input';
import {RadioGroup} from 'src/components/radio-field/radio-group';
import {SvgCamera} from 'src/shared/icons/components/camera-svg';
import {
  UserIcon,
  UserIconSize,
} from 'src/components/UI/button/user-icon/user-icon';
import {useNavigation} from '@react-navigation/native';
import {getProfileStyles} from './styles';
import {DateTimePicker} from 'src/components/UI/date-time-picker/date-time-picker';
import {useForm, Controller} from 'react-hook-form';
import {useUserEditProfile} from 'src/api/user/gql/mutations/__generated__/user-edit-profile.mutation';
import {GenderType} from 'src/shared/types/__generated__/gql-types';
import {
  validateDate,
  validateEmail,
  validatePhoneNumber,
} from 'src/utils/validation';
import {showToast} from 'src/utils/serverError';
import {formatUserInputData} from 'src/helpers/formatUserInputData';
import {
  FileCategory,
  imagePickerUploadPhoto,
} from 'src/utils/imagePickerUploadPhoto';
import {useGetMeRequest} from 'src/hooks/user/useGetMe';
import {formatDefaultUserValues} from 'src/helpers/formatDefaultUserValues';

const RadioLables = [
  {id: '101', label: 'Male', type: GenderType.Male},
  {id: '102', label: 'Female', type: GenderType.Female},
];

export interface UserInputDataSubmitProps {
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  gender?: GenderType;
  birthDate?: Date;
  email: string;
  phone?: string;
  country?: string;
}

export const Profile = () => {
  const themeVariant = useColorTheme();
  const styles = getProfileStyles(themeVariant);
  const navigate = useNavigation();
  const [userEditProfile] = useUserEditProfile();
  const {user} = useGetMeRequest();

  const defaultUserValues = formatDefaultUserValues(user);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      ...defaultUserValues,
    },
  });

  const [avatarUri, setAvatarUri] = React.useState<string | undefined>(
    defaultUserValues?.avatarUrl,
  );
  const [mediaUrl, setMediaUrl] = React.useState<string | undefined>();

  const handleGoBack = () => {
    navigate.goBack();
  };

  const onSubmit = async (dataSubmit: UserInputDataSubmitProps) => {
    try {
      if (mediaUrl && mediaUrl !== undefined) {
        dataSubmit.avatarUrl = mediaUrl;
      }

      await userEditProfile({
        variables: {
          input: formatUserInputData(dataSubmit),
        },
        refetchQueries: ['UserMe'],
      });

      handleGoBack();
    } catch (e) {
      showToast();
    }
  };

  errors.email && showToast();
  errors.phone && showToast();

  return (
    <View style={[styles.containerBackground, styles.container]}>
      <View style={styles.containerHeader}>
        <Button Icon={SvgArrowLeft} onPress={handleGoBack} />
        <Text
          style={[styles.fontHeader, styles.containerText, styles.textColor]}>
          Profile
        </Text>
        <View style={styles.containerTextButton}>
          <TextButton title="Done" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.containerIcons}>
          <UserIcon size={UserIconSize.LARGE} userPhotoUrl={avatarUri} />
          <View style={styles.containerCamera}>
            <IconButtonBg
              Icon={SvgCamera}
              buttonSize="medium"
              onPress={() =>
                imagePickerUploadPhoto({
                  fileCategory: FileCategory.AVATARS,
                  onImageUriSet: setAvatarUri,
                  onMediaUrlSet: setMediaUrl,
                })
              }
            />
          </View>
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.fontText, styles.textColor]}>Personal info</Text>
          <Controller
            control={control}
            name="firstName"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Enter your first name"
                label="First name"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Enter your last name"
                label="Last name"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="middleName"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Enter your surname"
                label="Surname"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.fontText, styles.textColor]}>Gender</Text>
          <Controller
            control={control}
            name="gender"
            render={({field: {onChange, value}}) => (
              <RadioGroup
                labels={RadioLables}
                selectedGenderType={value}
                onGenderChange={(selectedGenderType: string) =>
                  onChange(selectedGenderType)
                }
              />
            )}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.fontText, styles.textColor]}>Date of birth</Text>
          <Controller
            control={control}
            name="birthDate"
            rules={{validate: validateDate}}
            render={({field: {onChange, value}}) => (
              <DateTimePicker
                label="B-day"
                placeholder="Enter B-day"
                value={value}
                onChange={onChange}
                isError={!!errors.birthDate}
                errorMessage={errors.birthDate?.message}
              />
            )}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.fontText, styles.textColor]}>Account info</Text>
          <Controller
            control={control}
            name="email"
            rules={{validate: validateEmail}}
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Enter your email"
                label="Email"
                value={value}
                onChangeText={onChange}
                isError={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            rules={{validate: validatePhoneNumber}}
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Enter your phone number"
                label="Phone number"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="country"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Enter your country"
                label="Country"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
