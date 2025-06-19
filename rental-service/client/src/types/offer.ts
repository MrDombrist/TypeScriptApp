export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityOffer = {
  name: string;
  location: OfferLocation;
};

export type HostOffer = {
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityOffer;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: HostOffer;
  images: string[];
  maxAdults: number;
  previewImage: string;
};

export type OffersList={
    id:string;
    title:string;
    type:string;
    price:number;
    city:CityOffer;
    location:OfferLocation;
    isFavorite:boolean;
    isPremium:boolean;
    rating:number;
    previewImage: string;
}