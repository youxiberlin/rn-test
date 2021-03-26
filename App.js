import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from './components/Card';
import BikeDetail from './components/BikeDetail';
import bikeData from './data/bike-data';
import { compose, orderLowest, orderHighest } from './lib/utils'

// bike categories can be put in a config or fetch from database in production
const bikeCategories = ['road', 'city', 'e-bike', 'mountain']

function HomeScreen({ navigation }) {
  const [sortHighest, setSortHighest] = useState(false);
  const [sortLowest, setSortLowest] = useState(false);
  const [bikes, setBikes] = useState(bikeData);
  useEffect(() => {
    ;(async() => {
      if (sortHighest || sortLowest) {
        const newArr = sortHighest ?
          compose(orderHighest)(bikes) :
          compose(orderLowest)(bikes)
        await setBikes(newArr)
      }
    })()
  }, [sortHighest, sortLowest])

  console.log('sortHighest', sortHighest)
  console.log('sortLowest', sortLowest)
  console.log('prices', bikes.map(bike => bike.price))

  const Item = ({ name, price }) => (
    <View>
      <Text>{price}</Text>
      <Text>{name}</Text>
    </View>
  )
  const renderItem = ({ item }) => (
    <Item name={item.name} price={item.price} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.priceSort}>
        <Button
          title="Highest"
          color={sortHighest ? 'red' : 'white'}
          onPress={async () => {
            await setSortLowest(false);
            await setSortHighest(!sortHighest);
          }}
        />
        <Button
          title="Lowest"
          color={sortLowest ? 'red' : 'white'}
          onPress={async () => {
            await setSortHighest(false)
            await setSortLowest(!sortLowest)
          }
        }
        />
      </View>
      <View>
        <FlatList
          data={bikes}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      {/* {bikes.map(item =>
        <Card
          key={item.id}
          name={item.name}
          images={item.images}
          price={item.price}
          navigation={navigation}
        />)} */}
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
  },
  priceSort: {
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row'
  }
});
