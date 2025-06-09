import { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ScrollExampleScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500); // Імітація оновлення
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>Елемент {index + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20 },
  item: {
    backgroundColor: '#add8e6',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
  },
  text: { fontSize: 16 }
});
