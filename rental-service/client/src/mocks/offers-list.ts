import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: 'c5d7e9f1-a2b3-4c56-d789-e0123456789f',
    title: 'Sunset Terrace Suite',
    type: 'apartment',
    price: 450,
    previewImage: 'img/21.png',
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
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
  },
  {
    id: 'f2g3h4i5-j6k7-8901-lmno-pqrstuvwxyz1',
    title: 'Industrial Warehouse Loft',
    type: 'loft',
    price: 180,
    previewImage: 'img/27.png',
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
    isPremium: false,
    isFavorite: true,
    rating: 4.3,
  },
  {
    id: 'z9y8x7w6-v5u4-t3s2-r1q0-ponmlkjihgfe',
    title: 'Minimalist Garden Studio',
    type: 'studio',
    price: 125,
    previewImage: 'img/33.png',
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
    isPremium: false,
    isFavorite: false,
    rating: 4.6
  },
  {
    id: 'a9b8c7d6-e5f4-3210-9876-543210abcdef',
    title: 'Mountain View Chalet',
    type: 'house',
    price: 520,
    previewImage: 'img/39.png',
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
    isPremium: true,
    isFavorite: true,
    rating: 4.9
  }
];