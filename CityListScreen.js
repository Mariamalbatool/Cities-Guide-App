
- CityDetailsScreen.js:

import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function CityDetailsScreen({ route }) {
  const { city } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: city.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.cityName}>{city.name}</Text>
        <Text style={styles.countryName}>{city.country}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.detailsTitle}>Attractions</Text>
          {city.attractions.map((attraction, index) => (
            <Text key={index} style={styles.details}>
              {attraction}
            </Text>
          ))}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.detailsTitle}>Restaurants</Text>
          {city.restaurants.map((restaurant, index) => (
            <Text key={index} style={styles.details}>
              {restaurant}
            </Text>
          ))}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.detailsTitle}>Accommodations</Text>
          {city.accommodations.map((accommodation, index) => (
            <Text key={index} style={styles.details}>
              {accommodation}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  textContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  countryName: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },