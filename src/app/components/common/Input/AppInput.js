import React from 'react';
import { View, Platform, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../../styling';

const AppInput = ({
    autoCapitalize,
    autoCorrect,
    keyboardType,
    label = { text: '', icon: null },
    onValueChange,
    placeholder,
    value,
    secureTextEntry
}) => {
    const renderIcon = () => {
        if (label.icon) {
            const iconStyle = [styles.icon];
            iconStyle.push({ opacity: value !== '' ? 1 : 0.5 });
            return <Icon name={label.icon} style={iconStyle} size={26} />;
        }
        return;
    };

    return (
        <View style={styles.container}>
            {renderIcon()}
            <TextInput
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                keyboardType={keyboardType}
                onChangeText={onValueChange}
                placeholder={placeholder}
                placeholderTextColor={colors.placeHolderColor}
                secureTextEntry={secureTextEntry}
                style={styles.input}
                underlineColorAndroid="transparent"
                value={value}
            />
        </View>
    );
};

export { AppInput };

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.borderColor,
        borderColor: colors.borderColor,
        borderRadius: 4,
        borderWidth: 1,
        flex: 0,
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: Platform.OS === 'ios' ? 10 : 0
    },
    icon: {
        color: '#FFF',
        marginTop: Platform.OS === 'android' ? 5 : 0,
        paddingLeft: 5,
        paddingRight: 15
    },
    input: {
        color: colors.whiteColor,
        flex: 1,
        height: Platform.OS === 'ios' ? 26 : 40,
        marginTop: Platform.OS === 'ios' ? 2 : 0
    }
});
