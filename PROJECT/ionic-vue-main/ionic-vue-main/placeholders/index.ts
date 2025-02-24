import { Profile, MenuItem, CategoryMetaData, OrderedItem } from '../src/types';
import { category, food, general } from '../src/assets';
const { avatar } = general;

export const profile: Profile = {
  firstName: 'andrew',
  lastName: 'bautista',
  phone: '+63 912 345 6789',
  points: 0,
  email: 'chou@email.com',
  image: avatar,
  addresses: [
    {
      type: 'home',
      streetName: 'No.21 St. Agustin Street',
      barangay: 'Brgy. De Jose',
      city: 'Delgado City',
      zipCode: 2234,
      country: 'Philippines',
      isDefault: true,
    },
    {
      type: 'work',
      streetName: '3rd flr Anyeong Bldg. Seareal',
      city: 'St. Joaquin City',
      zipCode: 3456,
      country: 'Philippines',
      isDefault: false,
    },
  ],
};

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Steak Fries Veggies',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    image: food.steakFriesVeggies,
    category: 'Meat',
    price: 175,
    rating: 4.5,
    reward: {
      tier: 'Beginner',
      points: 20,
    },
  },
  {
    id: '2',
    name: 'Chicken Salad',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    image: food.chickenSalad,
    category: 'Chicken',
    price: 172,
    rating: 4,
  },
  {
    id: '3',
    name: 'Sorvetes Primavera',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    image: food.sorvetesPrimavera,
    category: 'Dessert',
    price: 185,
    rating: 5,
    reward: {
      tier: 'Intermediate',
      points: 30,
    },
  },
  {
    id: '4',
    name: 'Fried Chicken',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    image: food.friedChicken,
    category: 'Chicken',
    price: 175,
    rating: 3.5,
  },
  {
    id: '1',
    name: 'Not another Steak Fries Veggies',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    image: food.steakFriesVeggies,
    category: 'Meat',
    price: 175,
    rating: 4.5,
    reward: {
      tier: 'Beginner',
      points: 20,
    },
  },
  {
    id: '2',
    name: 'Not another Chicken Salad',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    image: food.chickenSalad,
    category: 'Chicken',
    price: 172,
    rating: 4,
  },
  {
    id: '3',
    name: 'Not another Sorvetes Primavera',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    image: food.sorvetesPrimavera,
    category: 'Dessert',
    price: 185,
    rating: 5,
    reward: {
      tier: 'Intermediate',
      points: 30,
    },
  },
  {
    id: '4',
    name: 'Not another Fried Chicken',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim.',
    image: food.friedChicken,
    category: 'Chicken',
    price: 175,
    rating: 3.5,
  },
];

export const orderedItems: OrderedItem[] = [
  {
    item: menuItems[0],
    quantity: 1,
    extras: [
      { name: 'Tomato Sauce', quantity: 1, unitPrice: 20 },
      { name: 'Regular Coke', quantity: 1, unitPrice: 40 },
      { name: 'Fried Chicken', quantity: 1, unitPrice: 120 },
    ],
  },
];

export const categoriesMetaData: CategoryMetaData[] = [
  { name: 'dessert', image: category.dessert, noOfRecipes: 5 },
  { name: 'meat', image: category.meat, noOfRecipes: 9 },
  { name: 'seafood', image: category.dessert, noOfRecipes: 5 },
  { name: 'chicken', image: category.meat, noOfRecipes: 9 },
  { name: 'breakfast', image: category.dessert, noOfRecipes: 9 },
];
