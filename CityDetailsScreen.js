- CityListScreen.js: 
 
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function CityListScreen({ navigation }) {
  const [citiesData, setCitiesData] = useState([]);

  const getCities = () => {
    fetch('https://api.mockfly.dev/mocks/615302c0-3ca6-4539-915e-3050284deade/cities')
      .then((response) => response.json())
      .then((json) => setCitiesData(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {citiesData.map((city) => (
          <TouchableOpacity
            key={city.id}
            onPress={() => navigation.navigate('City Details', { city })}
            style={styles.cityContainer}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: city.image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cityName}>{city.name}</Text>
              <Text style={styles.countryName}>{city.country}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  cityContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  imageContainer: {
    height: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 16,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countryName: {
    fontSize: 16,
    color: '#666',
  },
});
