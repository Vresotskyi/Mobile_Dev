import { useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SwipeableItem({ text, onSwipe }) {
  const scrollRef = useRef(null);

  const handleScrollEnd = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    if (offset > SCREEN_WIDTH / 2) {
      onSwipe();
    } else {
      scrollRef.current.scrollTo({ x: 0, animated: true });
    }
  };

  return (
    <ScrollView
      horizontal
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleScrollEnd}
      scrollEventThrottle={16}
    >
      <View style={styles.item}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={{ width: SCREEN_WIDTH }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH,
    padding: 20,
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    borderRadius: 10
  },
  text: { fontSize: 18 }
});
