import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppIconButton = ({ color, icon, onPress, size }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Icon name={icon} color={color} size={size} />
    </TouchableOpacity>
);

export { AppIconButton };
