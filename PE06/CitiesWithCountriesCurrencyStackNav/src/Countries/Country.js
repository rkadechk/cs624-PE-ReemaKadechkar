import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../theme';

export default function Country({ route }) {
  const { country } = route.params;
  const [currencies, setCurrencies] = useState([]);
  const [newCurrency, setNewCurrency] = useState('');
  const [currencyInfo, setCurrencyInfo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (country.currency) {
      setCurrencies([
        {
          name: country.currency,
          info: 'No info available',
        },
      ]);
    }
  }, [country]);

  const handleAddOrUpdateCurrency = () => {
    if (newCurrency.trim() === '') return;

    if (editingIndex !== null) {
      const updatedCurrencies = [...currencies];
      updatedCurrencies[editingIndex] = {
        name: newCurrency,
        info: currencyInfo || 'No info available',
      };
      setCurrencies(updatedCurrencies);
      setEditingIndex(null);
    } else {
      setCurrencies([
        ...currencies,
        {
          name: newCurrency,
          info: currencyInfo || 'No info available',
        },
      ]);
    }

    setNewCurrency('');
    setCurrencyInfo('');
  };

  const handleEditCurrency = (index) => {
    setNewCurrency(currencies[index].name);
    setCurrencyInfo(currencies[index].info);
    setEditingIndex(index);
  };

  const handleDeleteCurrency = (index) => {
    const updatedCurrencies = currencies.filter((_, i) => i !== index);
    setCurrencies(updatedCurrencies);
    if (editingIndex === index) {
      setNewCurrency('');
      setCurrencyInfo('');
      setEditingIndex(null);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{country.name || 'Country'}</Text>
        </View>

        {currencies.map((currency, index) => (
          <View key={index} style={styles.currencyItem}>
            <View style={styles.currencyRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.currencyTitle}>{currency.name}</Text>
                <Text style={styles.currencyValue}>{currency.info}</Text>
              </View>
              <View style={styles.currencyActions}>
                <TouchableOpacity
                  onPress={() => handleEditCurrency(index)}
                  style={styles.editButton}
                >
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDeleteCurrency(index)}
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.addCurrencySection}>
        <TextInput
          placeholder="Currency name"
          value={newCurrency}
          onChangeText={setNewCurrency}
          style={styles.input}
        />

        <TextInput
          placeholder="Currency info"
          value={currencyInfo}
          onChangeText={setCurrencyInfo}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={handleAddOrUpdateCurrency}
          style={styles.addButton}
        >
          <Text style={styles.buttonText}>
            {editingIndex !== null ? 'Update Currency' : 'Add Currency'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 220,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  currencyItem: {
  marginBottom: 12,
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  },
  currencyRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  currencyActions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  currencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  currencyValue: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  addCurrencySection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  editButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 6,
    marginRight: 10,
    minWidth: 70,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 6,
    minWidth: 70,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
