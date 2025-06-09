import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Вітаю на головному екрані!</Text>
      <Button
        title="Перейти до деталей"
        onPress={() =>
          navigation.navigate('Details', { itemId: 42, title: 'Приклад елемента' })
        }
      />
    </View>
  );
}
