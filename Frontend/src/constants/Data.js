import product_image from "../assets/Product/product_image.png";
import hemp_icon from "../assets/Category/rituals.svg";
import woolen_icon from "../assets/Category/woolen.svg";
import clothing_icon from "../assets/Category/clothing_icon.svg";
import rituals_icon from "../assets/Category/rituals.svg";
import { Route } from "react-router-dom";

export const cartItems = [
  {
    id: 1,
    name: "Center beads hemp hand band",
    price: 12357.309,
    quantity: 4,
  },
  {
    id: 2,
    name: "Yellow-red beads hemp hand band",
    price: 412.3,
    quantity: 2,
  },
  {
    id: 3,
    name: "Brass-copper beaten bangle",
    price: 324.3,
    quantity: 2,
  },
];

export const sidebarProductCategory = [
  {
    id: 1,
    name: "Hemp & Nettle Products",
    icon: hemp_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },

  {
    id: 2,
    name: "Felted woolen products",
    icon: woolen_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },

  {
    id: 3,
    name: "Clothing",
    icon: clothing_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },

  {
    id: 4,
    name: "Rituals Items",
    icon: rituals_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },

  {
    id: 5,
    name: "Felted woolen products",
    icon: woolen_icon,
    sub_category: [],
  },

  {
    id: 6,
    name: "Felted woolen products",
    icon: woolen_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },
  {
    id: 7,
    name: "Felted woolen products",
    icon: woolen_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },

  {
    id: 8,
    name: "Clothing",
    icon: clothing_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },

  {
    id: 9,
    name: "Clothing",
    icon: clothing_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },

  {
    id: 10,
    name: "Rituals Items",
    icon: rituals_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },

  {
    id: 11,
    name: "Felted woolen products",
    icon: woolen_icon,
    sub_category: [
      { id: 1, name: "Sub Category 1" },
      { id: 2, name: "Sub Category 2" },
      { id: 3, name: "Sub Category 3" },
      { id: 4, name: "Sub Category 4" },
    ],
  },
];

export const adminSidebarList = [
  {
    id: 1,
    name: "Dashboard",
    icon: hemp_icon,
    route: "/admin",
    sub_category: [],
  },

  {
    id: 2,
    name: "Media",
    icon: hemp_icon,
    route: "/admin/media",
    sub_category: [],
  },
  {
    id: 3,
    name: "User",
    icon: hemp_icon,
    route: "/admin/users",
    sub_category: [],
  },
  {
    id: 4,
    name: "User Activity",
    icon: hemp_icon,
    route: "/admin/user-activity",
    sub_category: [],
  },
];
