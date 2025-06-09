// screens/GridLayoutScreen.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function GridLayoutScreen() {
  const squares = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {squares.map((num) => (
        <View key={num} style={[styles.square, { backgroundColor: `hsl(${num * 40}, 70%, 60%)` }]}>
          <Text style={styles.label}>{num}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 10,
  },
  square: {
    width: 50,
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
