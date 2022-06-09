import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import MealsNavigator from './resources/navigation/MealsNavigator';

const fetchFonts = () =>
{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });
};
export default function App()
{

  const [fontloaded, setFontloaded] = useState(false);

  if (!fontloaded) {
    return (
      <View>
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontloaded(true)}
          onError={(err) => console.log(err)} />
      </View>
    );
  };

  return  ( <>
  <StatusBar style='light'/>
  <MealsNavigator />;
  </>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
