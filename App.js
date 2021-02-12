import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>  
      <Text style={styles.text}>
        Hello Michelle
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://cdn.britannica.com/83/130983-050-82EE4ECC/Michelle-Obama-portrait-first-lady-Blue-Room-2009.jpg'
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 50
  }
});
export default App;