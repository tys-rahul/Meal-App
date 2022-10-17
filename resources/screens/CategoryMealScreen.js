import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import {CATEGORIES, MEALS} from '../data/dummy_data'
import Colors from '../constants/Colors'
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
const CategoryMealScreen = props =>
{

    const catId = props.navigation.getParam('categoryId')
    const selectedCategory =  CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    function renderMealItem(itemData){
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps} />
    }

    return (<View style={styles.screen} >
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
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
    }
});