import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://cdn.britannica.com/83/130983-050-82EE4ECC/Michelle-Obama-portrait-first-lady-Blue-Room-2009.jpg',
        }}
      />
    </View>
  );
};

export default App;