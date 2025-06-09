import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Alert, Button, Switch, Text, TextInput, View } from 'react-native';

const UserInputScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [airplane, setAirplane] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [size, setSize] = useState('M');

  return (
    <View style={{ padding: 16 }}>
      <Text>Ім'я користувача:</Text>
      <TextInput value={username} onChangeText={setUsername} style={{ borderWidth: 1, marginBottom: 8 }} />

      <Text>Пароль:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 8 }} />

      <Button title="Надіслати" onPress={() => Alert.alert('Введено', `Username: ${username}\nPassword: ${password}`)} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
        <Text>Режим польоту</Text>
        <Switch value={airplane} onValueChange={(val) => {
          setAirplane(val);
          if (val) setWifi(false);
        }} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Wi-Fi</Text>
        <Switch value={wifi} onValueChange={setWifi} disabled={airplane} />
      </View>

      <Text style={{ marginTop: 16 }}>Розмір одягу:</Text>
      <Picker selectedValue={size} onValueChange={setSize} style={{ height: 50, width: 150 }}>
        <Picker.Item label="S" value="S" />
        <Picker.Item label="M" value="M" />
        <Picker.Item label="L" value="L" />
        <Picker.Item label="XL" value="XL" />
      </Picker>
      <Text>Обраний розмір: {size}</Text>
    </View>
  );
};

export default UserInputScreen;
