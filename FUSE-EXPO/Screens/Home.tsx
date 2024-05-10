import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Optional: change the background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Home;
