// screens/RowLayoutScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function RowLayoutScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: 'red' }]} />
      <View style={[styles.square, { backgroundColor: 'green' }]} />
      <View style={[styles.square, { backgroundColor: 'blue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  square: {
    width: 80,
    height: 80,
  },
});
