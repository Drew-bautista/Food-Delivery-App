import { InjectionKey } from 'vue';
import { CategoryMetaData, MenuItem, OrderedItem, Profile } from '@/types';

export const ProfileKey: InjectionKey<Profile> = Symbol('Profile');
export const MenuItemArrayKey: InjectionKey<MenuItem[]> =
  Symbol('MenuItemArray');
export const CategoryMetadataArrayKey: InjectionKey<CategoryMetaData[]> =
  Symbol('CategoryMetadataArray');
export const OrderedItemArrayKey: InjectionKey<OrderedItem[]> =
  Symbol('OrderedItemArray');
