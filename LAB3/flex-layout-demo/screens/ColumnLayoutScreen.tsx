// screens/ColumnLayoutScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ColumnLayoutScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: 'purple' }]} />
      <View style={[styles.square, { backgroundColor: 'orange' }]} />
      <View style={[styles.square, { backgroundColor: 'teal' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  square: {
    width: 80,
    height: 80,
  },
});
