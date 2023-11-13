import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {getDateTimePickerStyles} from './styles';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import dayjs from 'dayjs';

interface Props {
  label: string;
  placeholder: string;
  value: Date;
  onChange: (selectedDate: any) => void;
  isError?: boolean;
  errorMessage?: string;
}

export const DateTimePicker = ({
  label,
  placeholder,
  value,
  onChange,
  isError,
  errorMessage,
}: Props) => {
  const [isFilled, setIsFilled] = useState(false);
  const themeVariant = useColorTheme();
  const styles = getDateTimePickerStyles({themeVariant, isFilled, isError});

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    onChange(selectedDate);
    setIsFilled(true);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value,
      onChange: handleChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.fontLabel, styles.labelColor]}>{label}</Text>
      <Pressable onPress={showDatepicker}>
        {isFilled || value ? (
          <Text
            style={[styles.containerValue, styles.fontText, styles.textColor]}>
            {dayjs(value).format('DD.MM.YYYY')}
          </Text>
        ) : (
          <Text
            style={[styles.containerValue, styles.fontText, styles.textColor]}>
            {placeholder}
          </Text>
        )}
        {isError && (
          <Text style={[styles.containerError, styles.fontError]}>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
