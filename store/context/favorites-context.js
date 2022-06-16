import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favMealIDs, setFavMealIDs] = useState([]);

  const addFavorite = (id) => {
    setFavMealIDs((previousState) => [...previousState, id]);
  };

  const removeFavorite = (id) => {
    setFavMealIDs((previousState) =>
      previousState.filter((mealID) => mealID !== id)
    );
  };

  const value = {
    ids: favMealIDs,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
