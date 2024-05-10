import React, { useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import BottomTab from '../Components/BottomTab';

const Home = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonPress
    );

    return () => backHandler.remove();
  }, []);

  const handleBackButtonPress = () => {
    // Return true to indicate that we have handled the back press
    // and do not want the default behavior to be executed.
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>HOME</Text>
      </View>
      <BottomTab navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
