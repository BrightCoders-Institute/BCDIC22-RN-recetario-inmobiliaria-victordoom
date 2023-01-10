import React from 'react'
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const FavoriteButton = () => {
    return (
        <View style={styles.container}>
            <Icon name='heart' size={20} color='#fff' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
        backgroundColor: 'green',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
