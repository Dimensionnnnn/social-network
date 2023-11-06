import React from 'react';
import {UserIcon, UserIconSize} from '../UI/button/user-icon/user-icon';
import {Text, View} from 'react-native';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {getHeaderStyles} from './styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';

interface Props {
  headerInfo?: string;
}

export const Header: React.FC<Props> = ({headerInfo}) => {
  const themeVariant = useColorTheme();
  const styles = getHeaderStyles(themeVariant);
  const navigation = useNavigation();

  return (
    <>
      <View style={[styles.container, styles.backgroundColor]}>
        <Text style={[styles.fontText, styles.colorText]}>
          {headerInfo ? headerInfo : 'Hello'}
        </Text>
        <UserIcon
          size={UserIconSize.SMALL}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
    </>
  );
};
