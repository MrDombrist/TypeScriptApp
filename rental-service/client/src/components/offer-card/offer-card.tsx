import { FullOffer } from "../../types/offer";
import { useState } from "react";
import { Link } from "react-router-dom";
import {AppRoute} from "../../const.js";
type OfferCardProps = {
    offer: FullOffer;
  }
;

export function OfferCard({offer}:OfferCardProps){
      const [,setOfferId]=useState('');
  return(
    <article className="near-places__card place-card" onMouseOver={()=>setOfferId(offer.id)} onMouseOut={()=>setOfferId('')}>
        {offer.isPremium?(
          <div className="place-card__mark">
              <span>Premium</span>
          </div>):null
        }
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>
              <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            {offer.isFavorite?(
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use href="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>):(
              <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use href="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
            )
            } 
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: "80%"}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
}