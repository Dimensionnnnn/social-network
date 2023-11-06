import React from 'react';
import {View} from 'react-native';
import {Spinner} from 'src/components/UI/spinner/spinner';
import {NotFound} from 'src/components/UI/not-found/not-found';
import {notFoundMessage} from 'src/constants/notificationMessages';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {getListEmptyStyles} from './styles';

interface ListEmptyProps {
  isLoading?: boolean;
  isError?: boolean;
}

export const ListEmptyComponent: React.FC<ListEmptyProps> = ({
  isLoading,
  isError,
}) => {
  const themeVariant = useColorTheme();
  const styles = getListEmptyStyles(themeVariant);

  return (
    <View style={styles.container}>
      {isError && <NotFound text={notFoundMessage} />}
      {isLoading && (
        <Spinner color={styles.spinnerColor} stroke={styles.spinnerStroke} />
      )}
    </View>
  );
};
