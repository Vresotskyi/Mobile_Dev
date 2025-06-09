import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ navigation, route }: Props) {
  const { itemId, title } = route.params;

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Екран деталей</Text>
      <Text>ID елемента: {itemId}</Text>
      <Text>Назва: {title}</Text>
      <Button title="Перейти в профіль" onPress={() => navigation.navigate('Profile')} />
      <Button title="Повернутися назад" onPress={() => navigation.goBack()} />
    </View>
  );
}
