import React from 'react';
import {View, Text} from 'react-native';
import {SvgNotFound} from 'src/shared/icons/components/not-found-svg';
import {getNotFoundStyles} from './styles';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';

interface Props {
  text: string;
}

export const NotFound: React.FC<Props> = ({text}) => {
  const themeVariant = useColorTheme();
  const styles = getNotFoundStyles(themeVariant);

  return (
    <View style={styles.container}>
      <SvgNotFound
        primaryFill={styles.primary}
        secondaryFill={styles.secondary}
      />
      <Text
        style={[styles.fontTitle, styles.containerTitle, styles.titleColor]}>
        {text}
      </Text>
    </View>
  );
};
