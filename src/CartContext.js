import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addProductToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product }]);
    }
  };

  // Function to increase the quantity of a product in the cart
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  };

  // Function to decrease the quantity of a product in the cart
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product
      )
    );
  };

  // Function to remove a product from the cart
  const removeProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  // Function to clear all products from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total price of all items in the cart
  const getTotalPrice = () => {
    return cart
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  // Load cart data from AsyncStorage on initial render
  useEffect(() => {
    const loadCartData = async () => {
      try {
        const cartData = await AsyncStorage.getItem("cart");
        if (cartData) {
          setCart(JSON.parse(cartData));
        }
      } catch (error) {
        console.error("Error loading cart data:", error);
      }
    };
    loadCartData();
  }, []);

  // Save cart data to AsyncStorage whenever the cart state changes
  useEffect(() => {
    const saveCartData = async () => {
      try {
        await AsyncStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Error saving cart data:", error);
      }
    };
    saveCartData();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
