import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Albums",
  },
  {
    _id: uuid(),
    categoryName: "Wearables",
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
  },
];
