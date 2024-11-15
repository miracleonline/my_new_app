import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationShare = () => {
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        Alert.alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // Here, you can handle location sharing, like generating a URL
      },
      (error) => {
        Alert.alert(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View>
      <Text>Share Your Location</Text>
      <Button title="Get Location" onPress={getLocation} />
    </View>
  );
};

export default LocationShare;
