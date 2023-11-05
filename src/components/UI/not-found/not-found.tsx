import React from 'react';
import {View, Text} from 'react-native';
import {SvgNotFound} from 'src/shared/icons/components/not-found-svg';
import {getNotFoundStyles} from './styles';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';

interface Props {
  text: string;
}

export const NotFound: React.FC<Props> = ({text}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const styles = getNotFoundStyles(themeVariant);

  return (
    <View style={styles.container}>
      <SvgNotFound
        primaryFill={styles.primary}
        secondaryFill={styles.secondary}
      />
      <Text style={[styles.fontTitle, styles.containerTitle]}>{text}</Text>
    </View>
  );
};
