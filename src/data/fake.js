export const carouselData = [
  { image: require("../../assets/Banner.png"), title: "Item 1" },
  { image: require("../../assets/Banner.png"), title: "Item 2" },
];

export const coffeeProducts = [
  {
    id: 1,
    name: "Classic Hot Coffee",
    favourite: false,
    coffeeType: "Hot Coffee",
    price: 3.99,
    description: "A classic hot coffee made from the finest Arabica beans.",
    ingredients: ["Arabica coffee beans", "water"],
    rating: 4.5,
    noOfRatings: 100,
    sugarLevel: "Normal",
    coffeeOnly: true,
    highlyRoasted: true,
    image: require("../../assets/Image1.png"),
    typeId: 1,
  },
  {
    id: 2,
    name: "Iced Caramel Macchiato",
    favourite: true,
    coffeeType: "Iced Coffee",
    price: 4.99,
    description: "A delightful iced coffee with a rich caramel flavor.",
    ingredients: ["Espresso", "milk", "caramel syrup", "ice"],
    rating: 4.8,
    noOfRatings: 85,
    sugarLevel: "High Sugar",
    coffeeOnly: false,
    highlyRoasted: false,
    image: require("../../assets/Image1.png"),
    typeId: 2,
  },
  {
    id: 3,
    name: "Green Tea Latte",
    favourite: false,
    coffeeType: "Salada",
    price: 4.49,
    description:
      "A soothing green tea latte made with matcha powder and steamed milk.",
    ingredients: ["Matcha powder", "milk", "water"],
    rating: 4.2,
    noOfRatings: 70,
    sugarLevel: "Normal",
    coffeeOnly: false,
    highlyRoasted: false,
    image: require("../../assets/Image.png"),
    typeId: 3,
  },
  {
    id: 4,
    name: "Iced Mocha",
    favourite: true,
    coffeeType: "Iced Coffee",
    price: 4.79,
    description:
      "An indulgent iced coffee blended with chocolate syrup and milk.",
    ingredients: ["Espresso", "milk", "chocolate syrup", "ice"],
    rating: 4.6,
    noOfRatings: 95,
    sugarLevel: "High Sugar",
    coffeeOnly: false,
    highlyRoasted: true,
    image: require("../../assets/Image1.png"),
    typeId: 4,
  },
  {
    id: 5,
    name: "Vanilla Latte",
    favourite: false,
    coffeeType: "Hot Coffee",
    price: 4.29,
    description: "A smooth hot coffee infused with sweet vanilla flavor.",
    ingredients: ["Espresso", "milk", "vanilla syrup"],
    rating: 4.3,
    noOfRatings: 80,
    sugarLevel: "Normal",
    coffeeOnly: false,
    highlyRoasted: false,
    image: require("../../assets/Image1.png"),
    typeId: 2,
  },
  {
    id: 6,
    name: "Iced Cappuccino",
    favourite: false,
    coffeeType: "Iced Coffee",
    price: 4.49,
    description:
      "A refreshing iced coffee with frothy milk and a shot of espresso.",
    ingredients: ["Espresso", "milk", "ice"],
    rating: 4.4,
    noOfRatings: 75,
    sugarLevel: "Normal",
    coffeeOnly: false,
    highlyRoasted: true,
    image: require("../../assets/Image.png"),
    typeId: 4,
  },
  {
    id: 7,
    name: "Decaf Americano",
    favourite: true,
    coffeeType: "Hot Coffee",
    price: 3.79,
    description:
      "A decaffeinated hot coffee made with freshly brewed espresso and water.",
    ingredients: ["Decaf espresso", "water"],
    rating: 4.0,
    noOfRatings: 65,
    sugarLevel: "Normal",
    coffeeOnly: true,
    highlyRoasted: false,
    image: require("../../assets/Image1.png"),
    typeId: 1,
  },
  {
    id: 8,
    name: "Mocha Frappe",
    favourite: false,
    coffeeType: "Iced Coffee",
    price: 5.49,
    description:
      "A delightful mocha frappe made with coffee, milk, chocolate, and ice.",
    ingredients: ["Coffee", "milk", "chocolate syrup", "ice"],
    rating: 4.7,
    noOfRatings: 90,
    sugarLevel: "High Sugar",
    coffeeOnly: false,
    highlyRoasted: true,
    image: require("../../assets/Image1.png"),
    typeId: 4,
  },
  {
    id: 9,
    name: "Espresso",
    favourite: false,
    coffeeType: "Hot Coffee",
    price: 2.99,
    description: "A strong shot of espresso, the purest form of coffee.",
    ingredients: ["Espresso"],
    rating: 4.9,
    noOfRatings: 120,
    sugarLevel: "Normal",
    coffeeOnly: true,
    highlyRoasted: true,
    image: require("../../assets/Image1.png"),
    typeId: 1,
  },
  {
    id: 10,
    name: "Iced Hazelnut Latte",
    favourite: true,
    coffeeType: "Iced Coffee",
    price: 4.79,
    description: "A refreshing iced latte with the rich flavor of hazelnut.",
    ingredients: ["Espresso", "milk", "hazelnut syrup", "ice"],
    rating: 4.6,
    noOfRatings: 85,
    sugarLevel: "Normal",
    coffeeOnly: false,
    highlyRoasted: false,
    image: require("../../assets/Image.png"),
    typeId: 3,
  },
];

export const coffeeShops = [
  {
    id: 1,
    image: require("../../assets/coffee1.jpg"),
    name: "The Coffee Bean",
    location: "123 Main Street, Cityville",
    ratings: 4.7,
    noOfRatings: 120,
    deliveryCharge: 2.99,
    distance: 2.5, // in kilometers
    openTime: "8:00 AM - 10:00 PM",
  },
  {
    id: 2,
    image: require("../../assets/coffee2.jpg"),
    name: "Java Junction",
    location: "456 Oak Avenue, Townsville",
    ratings: 4.5,
    noOfRatings: 90,
    deliveryCharge: 1.99,
    distance: 1.8, // in kilometers
    openTime: "8:00 AM - 10:00 PM",
  },
  {
    id: 3,
    image: require("../../assets/cofee3.jpg"),
    name: "Mocha Moments",
    location: "789 Elm Road, Villagetown",
    ratings: 4.2,
    noOfRatings: 75,
    deliveryCharge: 2.49,
    distance: 3.2, // in kilometers
    openTime: "8:00 AM - 12:00 PM",
  },
  {
    id: 4,
    image: require("../../assets/coffee2.jpg"),
    name: "Café Arabica",
    location: "101 Maple Street, Boroughville",
    ratings: 4.9,
    noOfRatings: 150,
    deliveryCharge: 1.99,
    distance: 2.0, // in kilometers
    openTime: "8:00 AM - 10:00 PM",
  },
  {
    id: 5,
    image: require("../../assets/cofee3.jpg"),
    name: "Espresso Express",
    location: "222 Pine Avenue, Hamletville",
    ratings: 4.4,
    noOfRatings: 80,
    deliveryCharge: 2.99,
    distance: 2.7, // in kilometers
    openTime: "8:00 AM - 11:00 PM",
  },
];

export const brandData = [
  {
    id: "1",
    logo: require("../../assets/image4.png"),
  },
  {
    id: "2",
    logo: require("../../assets/image5.png"),
  },
  {
    id: "3",
    logo: require("../../assets/image6.png"),
  },
  {
    id: "4",
    logo: require("../../assets/image6.png"),
  },
];