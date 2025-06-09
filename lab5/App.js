import { SafeAreaView, ScrollView, View } from 'react-native';
import ItemList from './components/ItemList';
import LocationScreen from './components/LocationScreen';
import UserInputScreen from './components/UserInputScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <ItemList />
        <UserInputScreen />
        <View style={{ height: 400 }}>
          <LocationScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
