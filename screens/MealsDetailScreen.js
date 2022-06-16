import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect, useContext } from "react";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealContext = useContext(FavoritesContext);

  const mealID = route.params.mealID;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  const mealIsFavorite = favoriteMealContext.ids.includes(mealID);

  const pressHandler = () => {
    if (mealIsFavorite) {
      favoriteMealContext.removeFavorite(mealID);
    } else {
      favoriteMealContext.addFavorite(mealID);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            onPress={pressHandler}
          />
        );
      },
    });
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
        </View>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailText: {
    color: "#fff",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
export default MealDetailScreen;
