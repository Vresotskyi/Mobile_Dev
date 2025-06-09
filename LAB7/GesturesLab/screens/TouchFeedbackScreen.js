import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function TouchFeedbackScreen() {
  const [pressableText, setPressableText] = useState('Default Text');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Натиснуто TouchableOpacity')}>
        <Text style={styles.text}>Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={[styles.button, { backgroundColor: 'skyblue' }]}
        underlayColor="lightblue"
        onPress={() => Alert.alert('Натиснуто TouchableHighlight')}>
        <Text style={styles.text}>Highlight</Text>
      </TouchableHighlight>

      <Pressable
        style={[styles.button, { backgroundColor: 'lightgreen' }]}
        onPressIn={() => setPressableText('Pressed')}
        onLongPress={() => setPressableText('Long Pressed')}
        onPressOut={() => setPressableText('Default Text')}
      >
        <Text style={styles.text}>{pressableText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    margin: 10,
    padding: 20,
    backgroundColor: '#ccc',
    borderRadius: 10
  },
  text: { fontSize: 18 }
});
