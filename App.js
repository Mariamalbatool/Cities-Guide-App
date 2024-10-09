- App.js: 

import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CityListScreen from './CityListScreen'; 
import CityDetailsScreen from './CityDetailsScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Cities Guide App" 
          component={CityListScreen} 
          options={{ headerTitleAlign: 'center' }}
          />
          <Stack.Screen
          name="City Details" 
          component={CityDetailsScreen}
          options={{ headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
