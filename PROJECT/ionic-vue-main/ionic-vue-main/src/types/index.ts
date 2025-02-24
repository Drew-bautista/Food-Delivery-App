type Address = {
  type: 'work' | 'home';
  streetName: string;
  barangay?: string;
  city: string;
  zipCode: number;
  country: string;
  isDefault: boolean;
};

export type Profile = {
  firstName: string;
  lastName: string;
  phone: string;
  points: number;
  email: string;
  image: string;
  addresses: Address[];
};

export const menuCategories = [
  'Meat',
  'Chicken',
  'Breakfast',
  'Seafood',
  'Dessert',
] as const;

export type CategoryMetaData = {
  name: string;
  image: string;
  noOfRecipes: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: (typeof menuCategories)[number];
  price: number;
  rating: number;
  reward?: {
    tier: 'Beginner' | 'Intermediate' | 'Loyal';
    points: number;
  };
};

export type OrderedItem = {
  item: MenuItem;
  quantity: number;
  extras: {
    name: string;
    quantity: number;
    unitPrice: number;
  }[];
};
