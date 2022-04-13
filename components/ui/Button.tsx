import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../styles';

interface Props {
  text: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  text,
  onPress,
  containerStyle,
  buttonStyle,
  textStyle,
  disabled,
}) => (
  <View
    style={[
      disabled ? styles.disabledContainer : styles.container,
      containerStyle,
    ]}>
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.turquoise,
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 6,
  },
  text: {
    fontWeight: '500',
    color: 'white',
    fontSize: 18,
  },
  container: {
    width: '100%',
  },
  disabledContainer: {
    width: '100%',
    opacity: 0.5,
  },
});

export default Button;
