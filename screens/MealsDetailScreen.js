import { Text, View, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route }) => {
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
      />
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient, i) => {
        return <Text key={i}>{ingredient}</Text>;
      })}
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((step, i) => {
        return <Text key={i}>{step}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
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
  subTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#e2b497",
  },
  subContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
export default MealDetailScreen;
