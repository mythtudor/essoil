import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TestScreen = (props:any) => {
  const navigation: any = props.navigation;
  return (
    <View style={styles.container}>
      <Text>Ulei app maybe</Text>
      <TouchableOpacity
        onPress={ () => navigation.navigate("Home") }>

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

export default TestScreen;