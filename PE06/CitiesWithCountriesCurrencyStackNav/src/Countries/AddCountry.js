import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

export default function AddCountry({ addCountry, navigation }) {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (name === '' || currency === '') {
      alert('Please complete form');
      return;
    }
    const newCountry = {
      id: uuid.v4(),
      name,
      currency,
    };
    addCountry(newCountry);
    setName('');
    setCurrency('');
    navigation.navigate('CountriesNav', { screen: 'CountriesList' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      <TextInput
        placeholder="Country name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
