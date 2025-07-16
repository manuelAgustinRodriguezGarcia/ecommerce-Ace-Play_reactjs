import { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({children}) => {
  const [counterFav, setCounterFav] = useState(0);
  const [fav, setFav] = useState([]);
  return (
    <FavoritesContext.Provider value={{counterFav, setCounterFav, fav, setFav}}>
      {children}
    </FavoritesContext.Provider>
  )
}