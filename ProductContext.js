import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { coffeeProducts } from "./src/data/fake";

// Create the context
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    try {
      await AsyncStorage.removeItem("products");
      const data = await AsyncStorage.getItem("products");
      if (data !== null) {
        const parsedData = JSON.parse(data);
        setProducts(parsedData);
      } else {
        await AsyncStorage.setItem("products", JSON.stringify(coffeeProducts));
        setProducts(coffeeProducts);
      }
    } catch (error) {
      console.log("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
