import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const restaurants = [
    'McDonald\'s',
    'Burger King',
    'KFC',
    'Subway',
    'Domino\'s Pizza',
    'Pizza Hut',
    'Taco Bell',
    'Wendy\'s',
  ];

  const handleLike = () => {
    const currentRestaurant = restaurants[currentIndex];
    setLiked([...liked, currentRestaurant]);
    setCurrentIndex(currentIndex + 1);
  };

  const handleDislike = () => {
    const currentRestaurant = restaurants[currentIndex];
    setDisliked([...disliked, currentRestaurant]);
    setCurrentIndex(currentIndex + 1);
  };

  const renderMainScreen = () => {
    if (currentIndex >= restaurants.length) {
      return (
        <View style={styles.centeredContainer}>
          <Text style={styles.message}>No more restaurants to rate!</Text>
          <TouchableOpacity
            style={styles.resultsButton}
            onPress={() => setShowResults(true)}
          >
            <Text style={styles.buttonText}>View Results</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.restaurantName}>{restaurants[currentIndex]}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.likeButton]} onPress={handleLike}>
            <Text style={styles.buttonText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.dislikeButton]} onPress={handleDislike}>
            <Text style={styles.buttonText}>Dislike</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.resultsButton}
          onPress={() => setShowResults(true)}
        >
          <Text style={styles.buttonText}>View Results</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderResultsScreen = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Results</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listHeader}>Liked Restaurants</Text>
        {liked.map((restaurant) => (
          <Text key={restaurant} style={styles.listItem}>{restaurant}</Text>
        ))}
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listHeader}>Disliked Restaurants</Text>
        {disliked.map((restaurant) => (
          <Text key={restaurant} style={styles.listItem}>{restaurant}</Text>
        ))}
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setShowResults(false)}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {showResults ? renderResultsScreen() : renderMainScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 5,
  },
  likeButton: {
    backgroundColor: '#4CAF50',
  },
  dislikeButton: {
    backgroundColor: '#F44336',
  },
  resultsButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    marginTop: 20,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 2,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;