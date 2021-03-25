import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

const Card = ({ name, images, price, navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: images[0] }}
      />
      <View style={styles.textArea}>
        <Button
            title="Go To Detail"
            onPress={() => navigation.navigate('BikeDetail', {
              name, price, images
            })}
        />
        <Text>{name}</Text>
        <Text>€ {price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 320,
    backgroundColor: '#eee',
    padding: 5
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain'
  },
  textArea: {
    backgroundColor: 'white'
  }
});

export default Card;