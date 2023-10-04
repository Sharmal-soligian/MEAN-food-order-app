import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Biryani',
    price: 5,
    cookTime: '10-20',
    favorite: false,
    origins: ['Asia', 'East-Australia'],
    stars: 3.0,
    imageUrl: '/assets/MuttonBiryani.webp',
    tags: ['Food', 'Taste']
  },
  {
    id: '2',
    name: 'Biryani',
    price: 5,
    cookTime: '10-20',
    favorite: true,
    origins: ['Asia', 'East-Australia'],
    stars: 3.0,
    imageUrl: '/assets/MuttonBiryani.webp',
    tags: ['Food', 'Taste']
  },
  {
    id: '3',
    name: 'Biryani',
    price: 5,
    cookTime: '10-20',
    favorite: true,
    origins: ['Asia', 'East-Australia'],
    stars: 3.0,
    imageUrl: '/assets/MuttonBiryani.webp',
    tags: ['Food', 'Taste']
  },
  {
    id: '4',
    name: 'Biryani',
    price: 5,
    cookTime: '10-20',
    favorite: false,
    origins: ['Asia', 'East-Australia'],
    stars: 3.0,
    imageUrl: '/assets/MuttonBiryani.webp',
    tags: ['Food', 'Taste']
  },
  {
    id: '5',
    name: 'Idli',
    price: 5,
    cookTime: '10-20',
    favorite: false,
    origins: ['Asia', 'East-Australia'],
    stars: 1.0,
    imageUrl: '/assets/MuttonBiryani.webp',
    tags: ['Food', 'Taste']
  },
  {
    id: '6',
    name: 'Dosa',
    price: 5,
    cookTime: '10-20',
    favorite: true,
    origins: ['Asia', 'East-Australia'],
    stars: 3.0,
    imageUrl: '/assets/MuttonBiryani.webp',
    tags: ['Food', 'Taste']
  },
]

export const sample_tags: Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]
