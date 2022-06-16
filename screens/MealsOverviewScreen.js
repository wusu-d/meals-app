import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catID = route.params.categoryID;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  return <MealsList data={displayedMeals} />;
};

export default MealsOverviewScreen;
