import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Summer T-Shirt",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product1.webp",
    price: "500",
    categoryName: "Wearables",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Scarf",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product2.webp",
    price: "300",
    categoryName: "Wearables",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Coffee Mug",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product3.webp",
    price: "100",
    categoryName: "Accessories",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Phone case",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product4.webp",
    price: "200",
    categoryName: "Accessories",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Notebook",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product5.webp",
    price: "400",
    categoryName: "Accessories",
    rating: 1,
  },
  {
    _id: uuid(),
    title: "Water Bottle",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product6.webp",
    price: "500",
    categoryName: "Accessories",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Red Vinyl",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product7.webp",
    price: "1500",
    categoryName: "Albums",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Fearless CD",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product8.webp",
    price: "1500",
    categoryName: "Albums",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Hoodie",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product9.webp",
    price: "3000",
    categoryName: "Wearables",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "T-shirt Dress",
    image:
      "https://raw.githubusercontent.com/Aditi0505/TheRedClosetImages/master/product10.webp",
    price: "3200",
    categoryName: "Wearables",
    rating: 1,
  },
];
