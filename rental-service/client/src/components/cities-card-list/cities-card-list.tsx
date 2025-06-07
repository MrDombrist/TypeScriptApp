import { CitiesCard } from '../cities-card/cities-card';
import { OfferList } from '../../types/offer';

type CitiesCardListProps = {
    offers: OfferList;
}

function CitiesCardList({ offers }: CitiesCardListProps) {
    return (
        <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
                <CitiesCard
                    key={offer.id}
                    id={offer.id}
                    title={offer.title}
                    type={offer.type}
                    price={offer.price}
                    isPremium={offer.isPremium}
                    image={offer.images[0]}
                    rating={offer.rating}
                />
            ))}
        </div>
    );
}

export { CitiesCardList };