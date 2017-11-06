import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppButton = ({
    accessibilityLabel,
    disabled,
    icon,
    onPress,
    loading,
    title,
    type
}) => {
    const containerStyle = [styles.container];
    const loadingStyle = [styles.loading];
    const iconStyle = [styles.icon];
    const textStyle = [styles.text];

    switch (type) {
        case 'inverse':
            containerStyle.push({
                backgroundColor: '#FFF',
                borderColor: '#FFF'
            });
            iconStyle.push({ color: '#6D2DD8' });
            textStyle.push({ color: '#6D2DD8' });
            break;
        default:
            containerStyle.push({
                backgroundColor: '#6D2DD8',
                borderColor: '#6D2DD8'
            });
            iconStyle.push({ color: '#FFF' });
            textStyle.push({ color: '#FFF' });
    }

    const renderIcon = () => {
        if (icon && !loading) {
            return <Icon name={icon} style={iconStyle} />;
        }
        if (loading) {
            return (
                <ActivityIndicator
                    color={StyleSheet.flatten(iconStyle).color}
                    size={'small'}
                    style={loadingStyle}
                />
            );
        }
        return;
    };

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            disabled={disabled}
            onPress={onPress}
            style={containerStyle}>
            {renderIcon()}
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export { AppButton };

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    icon: {
        fontSize: 18,
        marginRight: 10
    },
    loading: {
        marginRight: 10
    },
    text: {
        fontSize: 18
    }
});
