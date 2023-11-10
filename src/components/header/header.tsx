import React from 'react';
import {UserIcon, UserIconSize} from '../UI/button/user-icon/user-icon';
import {Text, View} from 'react-native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {getHeaderStyles} from './styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {formatUserName} from 'src/helpers/formatUserName';
import {useUserMeRequest} from 'src/hooks/user/useUserMe';

interface Props {
  headerInfo?: string;
}

export const Header: React.FC<Props> = ({headerInfo}) => {
  const themeVariant = useColorTheme();
  const styles = getHeaderStyles(themeVariant);
  const navigation = useNavigation();
  const {user} = useUserMeRequest();

  const userName = formatUserName(user?.firstName, user?.lastName);

  return (
    <>
      <View style={[styles.container, styles.backgroundColor]}>
        <Text style={[styles.fontText, styles.colorText]}>
          {headerInfo ? headerInfo : userName ?? 'Hello'}
        </Text>
        <UserIcon
          size={UserIconSize.SMALL}
          userPhotoUrl={user?.avatarUrl ?? undefined}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
    </>
  );
};
