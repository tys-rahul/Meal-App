import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FavouriteScreen = () =>
{
    return (< View style={styles.screen} >
        <Text > FavouriteScreen </Text> </View>
    );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});