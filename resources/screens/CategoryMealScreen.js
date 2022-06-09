import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy_data'
import Colors from '../constants/Colors'
const CategoryMealScreen = props =>
{

    const catId = props.navigation.getParam('categoryId')
    const selectedCategory =  CATEGORIES.find(cat => cat.id === catId);

    return (<View style={styles.screen} >
        <Text>Category Meal Screen!</Text>
        <Text>{selectedCategory.title}</Text>
        <Button title='Go to MealDetail!' onPress={() => {
            props.navigation.navigate({ routeName: "MealDetail"});
        }}/>
    </View>
    );
};
CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory =  CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerStyle:{
            backgroundColor: Colors.primayColor
        },
        headerTintColor: '#fff'
    };
};
export default CategoryMealScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});