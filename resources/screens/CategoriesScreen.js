import { StyleSheet, Text, View, Button, FlatList,TouchableOpacity } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy_data';
import  Colors  from '../constants/Colors';


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return(
            <TouchableOpacity style = { [ styles.gridItem, {backgroundColor: itemData.item.color}] } onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals',
            params: {
                categoryId: itemData.item.id
            }
        })
        }}>
         <View ><Text style={styles.innerContainer}>{ itemData.item.title }</Text></View >
        </TouchableOpacity>
    )};
    
    return ( 
        <
        FlatList style={styles.screen} keyExtractor = {
            (item, index) => item.id
        }
        data = { CATEGORIES }
        renderItem = { renderGridItem }
        numColumns = { 2 }
        /> 
    );
};

CategoriesScreen.navigationOptions = {
    headerStyle:{
        backgroundColor: Colors.primayColor
    },
    headerTintColor: '#fff'
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#24180f'
    },
    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        elevation: 4,        
        },
    innerContainer:{
        color:'#fff',
        fontWeight:'bold',
        fontSize: 18
    }
})