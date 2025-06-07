import { FullOffer } from '../types/offer';

export const offers: FullOffer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 3,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'],
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    maxAdults: 4
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 10
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: 'Cozy room in the heart of Paris with authentic decor and modern amenities.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Towels', 'Coffee machine'],
    host: {
      id: 2,
      name: 'Pierre',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg'
    },
    images: ['img/room.jpg', 'img/apartment-02.jpg', 'img/studio-01.jpg'],
    maxAdults: 2
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    description: 'Modern apartment with beautiful canal views in historic Amsterdam.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Washing machine', 'Kitchen', 'Dishwasher', 'Heating'],
    host: {
      id: 3,
      name: 'Hans',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    maxAdults: 3
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 10
      }
    },
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    description: 'Luxurious apartment in the center of Cologne with all modern amenities.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge', 'Air conditioning'],
    host: {
      id: 4,
      name: 'Klaus',
      isPro: true,
      avatarUrl: 'img/avatar-max.jpg'
    },
    images: ['img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/room.jpg', 'img/studio-01.jpg'],
    maxAdults: 4
  }
];