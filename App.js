import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from './components/Card';
import BikeDetail from './components/BikeDetail';
import bikes from './data/bike-data';

// bike categories can be put in a config or fetch from database in production
const bikeCategories = ['road', 'city', 'e-bike', 'mountain']

function HomeScreen({ navigation }) {
  const makeCard = items => items.map(item =>
    <Card
      key={item.id}
      name={item.name}
      images={item.images}
      price={item.price}
      navigation={navigation}
    />)
  return (
    <View style={styles.container}>
      {makeCard(bikes)}
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BikeDetail" component={BikeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10
  }
});
