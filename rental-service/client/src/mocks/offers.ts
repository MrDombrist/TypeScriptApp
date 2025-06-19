import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: 'c5d7e9f1-a2b3-4c56-d789-e0123456789f',
    title: 'Sunset Terrace Suite',
    description: 'Luxurious penthouse with panoramic city views, rooftop terrace, and premium amenities. Perfect for romantic getaways.',
    type: 'apartment',
    price: 450,
    images: ['../../img/21.png', '../../img/22.png', '../../img/23.png', '../../img/24.png', '../../img/25.png', '../../img/26.png'],
    city: {
      name: 'Rome',
      location: {
        latitude: 41.9028,
        longitude: 12.4964,
        zoom: 13
      }
    },
    location: {
      latitude: 41.9048,
      longitude: 12.4914,
      zoom: 16
    },
    goods: [
      'Heating', 'Wi-Fi', 'Fridge', 'Laptop friendly workspace',
      'Air conditioning', 'Washer', 'Towels', 'Balcony',
      'Dishwasher', 'Kitchen', 'Smart TV', 'Iron', 'Hair dryer'
    ],
    host: {
      isPro: true,
      name: 'Marco',
      avatarUrl: '../../img/avatar-marco.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 6
  },
  {
    id: 'f2g3h4i5-j6k7-8901-lmno-pqrstuvwxyz1',
    title: 'Industrial Warehouse Loft',
    description: 'Converted warehouse with exposed brick walls and high ceilings. Unique urban living experience.',
    type: 'loft',
    price: 180,
    images: ['../../img/27.png', '../../img/28.png', '../../img/29.png', '../../img/30.png', '../../img/31.png', '../../img/32.png'],
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.5200,
        longitude: 13.4050,
        zoom: 12
      }
    },
    location: {
      latitude: 52.5170,
      longitude: 13.3889,
      zoom: 14
    },
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Coffee machine', 'Workspace', 'Parking'],
    host: {
      isPro: false,
      name: 'Katarina',
      avatarUrl: '../../img/avatar-katarina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.3,
    bedrooms: 2,
    maxAdults: 4
  },
  {
    id: 'z9y8x7w6-v5u4-t3s2-r1q0-ponmlkjihgfe',
    title: 'Minimalist Garden Studio',
    description: 'Peaceful studio apartment with private garden access. Eco-friendly and sustainably designed.',
    type: 'studio',
    price: 125,
    images: ['../../img/33.png', '../../img/34.png', '../../img/35.png', '../../img/36.png', '../../img/37.png', '../../img/38.png'],
    city: {
      name: 'Copenhagen',
      location: {
        latitude: 55.6761,
        longitude: 12.5683,
        zoom: 13
      }
    },
    location: {
      latitude: 55.6781,
      longitude: 12.5643,
      zoom: 15
    },
    goods: ['Wi-Fi', 'Fridge', 'Towels', 'Garden access', 'Bicycle', 'Organic toiletries'],
    host: {
      isPro: true,
      name: 'Lars',
      avatarUrl: '../../img/avatar-lars.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.6,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: 'a9b8c7d6-e5f4-3210-9876-543210abcdef',
    title: 'Mountain View Chalet',
    description: 'Traditional Alpine chalet with stunning mountain views. Fireplace, sauna, and outdoor hot tub included.',
    type: 'house',
    price: 520,
    images: ['../../img/39.png', '../../img/40.png', '../../img/41.png', '../../img/42.png', '../../img/43.png', '../../img/44.png'],
    city: {
      name: 'Zurich',
      location: {
        latitude: 47.3769,
        longitude: 8.5417,
        zoom: 12
      }
    },
    location: {
      latitude: 47.3889,
      longitude: 8.5217,
      zoom: 14
    },
    goods: ['Fireplace', 'Wi-Fi', 'Kitchen', 'Towels', 'Sauna', 'Hot tub', 'Mountain bikes', 'Ski storage'],
    host: {
      isPro: true,
      name: 'Ingrid',
      avatarUrl: '../../img/avatar-ingrid.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 4,
    maxAdults: 8
  }
];

export {offers};