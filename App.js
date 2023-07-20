import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import CartContextProvider from "./src/CartContext";
import AppScreen from "./src/app";
import { ProductContextProvider } from "./ProductContext";

const loadFonts = async () => {
  await Font.loadAsync({
    Poppins500: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins700: require("./assets/fonts/Poppins-Bold.ttf"),
    RobotoBold: require("./assets/fonts/RobotoSlab-VariableFont_wght.ttf"),
    BebaseNuove: require("./assets/fonts/BebasNeue-Regular.ttf"),
  });
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncData = async () => {
      await loadFonts();
      setIsFontLoaded(true);
    };

    loadAsyncData();
  }, []);

  if (!isFontLoaded) {
    return null; // You can render a loading indicator here if needed
  }

  return (
    <ProductContextProvider>
      <CartContextProvider>
        <SafeAreaView style={styles.content}>
          <AppScreen />
        </SafeAreaView>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
