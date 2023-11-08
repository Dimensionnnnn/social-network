import React from 'react';
import {View, Text} from 'react-native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {SvgArrowLeft} from 'src/shared/icons/components/arrow-left-svg';
import {Button} from 'src/components/UI/button/button-icon/button-icon';
import {getHeaderStyles} from './styles';

interface Props {
  title: string;
  goBack: () => void;
}

export const HeaderPost: React.FC<Props> = ({title, goBack}) => {
  const themeVariant = useColorTheme();
  const styles = getHeaderStyles(themeVariant);
  return (
    <View style={styles.container}>
      <Button Icon={SvgArrowLeft} onPress={goBack} />
      <View>
        <Text
          style={[styles.containerText, styles.fontTitle, styles.colorTitle]}>
          {title}
        </Text>
      </View>
    </View>
  );
};
