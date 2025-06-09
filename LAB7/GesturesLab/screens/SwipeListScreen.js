import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SwipeableItem from '../components/SwipeableItem';

export default function SwipeListScreen() {
  const [items, setItems] = useState(
    Array.from({ length: 6 }, (_, i) => `Swipe Me ${i + 1}`)
  );

  const handleSwipe = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  return (
    <View style={styles.container}>
      {items.map((text, index) => (
        <SwipeableItem
          key={index}
          text={text}
          onSwipe={() => handleSwipe(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 40 }
});
