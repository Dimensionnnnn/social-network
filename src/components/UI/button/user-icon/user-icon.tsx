import React from 'react';
import {Image, Pressable} from 'react-native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {SvgUserIcon} from 'src/shared/icons/components/user-icon';
import {getUserIconStyles} from './styles';

export enum UserIconSize {
  VERY_SMALL = 'verySmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface UserIconProps {
  size: UserIconSize;
  userPhotoUrl?: string;
  onPress?: () => void;
}

export const UserIcon: React.FC<UserIconProps> = ({
  size,
  userPhotoUrl,
  onPress,
}) => {
  const themeVariant = useColorTheme();
  const userIconStyles = getUserIconStyles(themeVariant, size);

  return (
    <Pressable
      style={[
        userIconStyles.container,
        userIconStyles.containerColor,
        userIconStyles.containerBySize,
      ]}
      onPress={onPress}>
      {userPhotoUrl ? (
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          source={{uri: userPhotoUrl}}
          style={userIconStyles.imageSize}
        />
      ) : (
        <SvgUserIcon
          color={userIconStyles.iconColor}
          width={userIconStyles.iconSize.width}
          height={userIconStyles.iconSize.height}
        />
      )}
    </Pressable>
  );
};
