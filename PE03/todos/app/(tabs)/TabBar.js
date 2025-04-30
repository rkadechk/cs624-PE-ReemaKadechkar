import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ filter, setFilter }) => {
  const filters = ['All', 'Active', 'Complete'];

  return (
    <View style={styles.container}>
      {filters.map(f => (
        <TouchableOpacity
          key={f}
          style={[styles.tab, filter === f && styles.activeTab]}
          onPress={() => setFilter(f)}
        >
          <Text style={[styles.tabText, filter === f && styles.activeTabText]}>
            {f}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabText: {
    fontSize: 16,
    color: '#888888',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  activeTabText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default TabBar;
