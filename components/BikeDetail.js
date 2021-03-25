import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const BikeDetail = ({ route }) => {
  const { name, price, images } = route.params;
  return (
    <View style={styles.container}>
      <Text>Bike Detail is here</Text>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Image
        style={styles.image}
        source={{ uri: images[0] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain'
  },
});

export default BikeDetail;