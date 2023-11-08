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

const RadioLables = [
  {id: 101, label: 'Male'},
  {id: 102, label: 'Female'},
];

export const Profile = () => {
  const themeVariant = useColorTheme();
  const styles = getProfileStyles(themeVariant);
  const navigate = useNavigation();

  const handleGoBack = () => {
    navigate.goBack();
  };

  return (
    <View style={[styles.containerBackground, styles.container]}>
      <View style={styles.containerHeader}>
        <Button Icon={SvgArrowLeft} onPress={handleGoBack} />
        <Text
          style={[styles.fontHeader, styles.containerText, styles.textColor]}>
          Profile
        </Text>
        <View style={styles.containerTextButton}>
          <TextButton title="Done" onPress={handleGoBack} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.containerIcons}>
          <UserIcon size={UserIconSize.LARGE} />
          <View style={styles.containerCamera}>
            <IconButtonBg Icon={SvgCamera} buttonSize="medium" />
          </View>
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.fontText, styles.textColor]}>Personal info</Text>
          <Input placeholder="Enter your first name" label="First name" />
          <Input placeholder="Enter your last name" label="Last name" />
          <Input placeholder="Enter your surname" label="Surname" />
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.fontText, styles.textColor]}>Gender</Text>
          <RadioGroup labels={RadioLables} />
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.fontText, styles.textColor]}>Date of birth</Text>
          <Input placeholder="Enter B-day" label="B-day" />
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.fontText, styles.textColor]}>Account info</Text>
          <Input placeholder="Enter your email" label="Email" />
          <Input placeholder="Enter your phone number" label="Phone number" />
          <Input placeholder="Enter your country" label="Country" />
        </View>
      </ScrollView>
    </View>
  );
};
