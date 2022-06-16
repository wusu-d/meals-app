import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealContext.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }

  return <MealsList data={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default FavoriteScreen;
