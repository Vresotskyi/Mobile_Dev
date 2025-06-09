import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Доступ до локації заборонено');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  if (!location) {
    return <Text>{errorMsg || "Завантаження локації..."}</Text>;
  }

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      showsUserLocation
      followsUserLocation
    >
      <Marker coordinate={location} title="Ви тут" />
      <Marker
        coordinate={{ latitude: 50.4501, longitude: 30.5234 }}
        title="Київ"
        description="Столиця України"
      />
      <Polygon
        coordinates={[
          { latitude: 50.4501, longitude: 30.5234 },
          { latitude: 50.4601, longitude: 30.5234 },
          { latitude: 50.4601, longitude: 30.5334 },
          { latitude: 50.4501, longitude: 30.5334 },
        ]}
        strokeColor="blue"
        fillColor="rgba(0,0,255,0.3)"
      />
    </MapView>
  );
};

export default LocationScreen;
