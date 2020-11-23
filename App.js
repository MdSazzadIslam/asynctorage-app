/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

const saveData = async () => {
  try {
    let uObj = {
      name: 'Sazzad',
      email: 'netsazzad@gmail.com',
      city: 'Mirpur, Dhaka, Bangladesh',
    };

    await AsyncStorage.setItem('user', JSON.stringify(uObj));
    Alert.alert('Save information', 'Successfull');
  } catch (error) {
    Alert.alert('Save information', error);
  }
};

const retriveData = async () => {
  try {
    let result = await AsyncStorage.getItem('user');
    if (result !== null) {
      let user = JSON.parse(result);
      Alert.alert('Display Information', user.name);
    } else {
      Alert.alert('Display Information', 'Nothing to show!!!');
    }
  } catch (error) {
    alert(error);
  }
};

const removeData = async () => {
  try {
    let result = await AsyncStorage.getItem('user');
    if (result !== null) {
      await AsyncStorage.removeItem('user');
      Alert.alert('Delete Information', 'Successfull');
    } else {
      Alert.alert('Delete Information', 'Nothing to delete!!!');
    }
  } catch (error) {
    Alert.alert('Delete Information', error);
  }
};

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={saveData}>
        <Text style={styles.textInput}>Save Data</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={retriveData}>
        <Text style={styles.textInput}>Retrive Data</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={removeData}>
        <Text style={styles.textInput}>Delete Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
