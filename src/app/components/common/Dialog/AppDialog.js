import React from 'react';
import { Modal, Text, StyleSheet, View } from 'react-native';
import { AppButton } from '../Button/AppButton';

const AppDialog = ({ children, visible, onConfirm, onCancel }) => (
    <Modal
        animationType="slide"
        onRequestClose={onCancel}
        transparent
        visible={visible}>
        <View style={styles.container}>
            <View style={styles.body}>{children}</View>
            <View style={styles.footer}>
                <AppButton
                    accessibilityLabel="No, Cancel"
                    icon="ios-close-circle-outline"
                    onPress={onCancel}
                    title="Cancel"
                />
                <AppButton
                    accessibilityLabel="Yes, confirm"
                    icon="ios-checkmark-circle-outline"
                    onPress={onConfirm}
                    title="Yes, I confirm!"
                />
            </View>
        </View>
    </Modal>
);

export { AppDialog };

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        flex: 1,
        position: 'relative',
        justifyContent: 'flex-end'
    },
    body: {
        backgroundColor: '#fff',
        padding: 20
    },
    footer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }
});
