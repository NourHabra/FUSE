import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThisATest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a trial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ThisATest;
