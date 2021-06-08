import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props:any) => {
    const navigation: any = props.navigation;
  return (
    <View style={styles.container}>
      <Text>Ulei app maybe</Text>
      <TouchableOpacity
      onPress={ () => navigation.navigate("Test") }>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;