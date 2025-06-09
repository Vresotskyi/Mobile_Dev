import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScrollExampleScreen from './screens/ScrollExampleScreen';
import SwipeListScreen from './screens/SwipeListScreen';
import TouchFeedbackScreen from './screens/TouchFeedbackScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Touch Feedback" component={TouchFeedbackScreen} />
        <Stack.Screen name="Scrollable Content" component={ScrollExampleScreen} />
        <Stack.Screen name="Swipe List" component={SwipeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
