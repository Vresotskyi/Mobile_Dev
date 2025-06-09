import { useState } from 'react';
import {
    Button,
    FlatList,
    RefreshControl,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const ItemList = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Молоко', price: 25 },
    { id: '2', name: 'Хліб', price: 18 },
    { id: '3', name: 'Сир', price: 80 },
    { id: '4', name: 'Ковбаса', price: 95 },
    { id: '5', name: 'Яблука', price: 35 },
    { id: '6', name: 'Морозиво', price: 30 },
    { id: '7', name: 'Картопля', price: 20 },
    { id: '8', name: 'Цибуля', price: 12 },
    { id: '9', name: 'Курка', price: 120 },
    { id: '10', name: 'Рис', price: 40 },
  ]);

  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(prev => [...prev, {
        id: `${prev.length + 1}`,
        name: `Новий ${prev.length + 1}`,
        price: Math.floor(Math.random() * 100)
      }]);
      setRefreshing(false);
    }, 1000);
  };

  const loadMore = () => {
    const newItems = Array.from({ length: 5 }, (_, i) => ({
      id: `${items.length + i + 1}`,
      name: `Новий ${items.length + i + 1}`,
      price: Math.floor(Math.random() * 100),
    }));
    setItems(prev => [...prev, ...newItems]);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Пошук товару"
        value={search}
        onChangeText={setSearch}
        style={{ borderColor: 'gray', borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title={`Сортувати за ціною (${sortAsc ? '↑' : '↓'})`} onPress={() => setSortAsc(!sortAsc)} />
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, backgroundColor: '#f2f2f2', marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{item.name} - {item.price}₴</Text>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={{ color: 'red' }}>Видалити</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text>Товарів не знайдено</Text>}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default ItemList;
