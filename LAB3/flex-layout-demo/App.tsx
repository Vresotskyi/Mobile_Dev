import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Platform } from 'react-native';

// Імпортуємо екрани
import RowLayoutScreen from './screens/RowLayoutScreen';
import ColumnLayoutScreen from './screens/ColumnLayoutScreen';
import GridLayoutScreen from './screens/GridLayoutScreen';

export default function App() {
  // Список макетів
  const layouts = ['row', 'column', 'grid'] as const;
  const [index, setIndex] = useState(0);

  // Функція перемикання між макетами
  const nextLayout = () => {
    setIndex((prev) => (prev + 1) % layouts.length);
  };

  // Відображення поточного макету
  const CurrentScreen = () => {
    switch (layouts[index]) {
      case 'row':
        return <RowLayoutScreen />;
      case 'column':
        return <ColumnLayoutScreen />;
      case 'grid':
        return <GridLayoutScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonContainer}>
        <Button title="Змінити макет" onPress={nextLayout} />
        <Text style={styles.layoutText}>Поточний макет: {layouts[index]}</Text>
      </View>
      <CurrentScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.select({ ios: 50, android: 20 }), // адаптація до платформи
  },
  buttonContainer: {
    padding: 10,
    alignItems: 'center',
  },
  layoutText: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
