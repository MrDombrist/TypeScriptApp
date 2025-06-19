import { MainPage } from "../../pages/main-page/main-page";
import { Login } from "../../pages/login/login";
import { Offer } from "../../pages/offer/offer";
import { Favorites } from "../../pages/favorites/favorites";
import { NotFoundPage } from "../404/404";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRoute,AuthorizationStatus} from "../../const.js";
import {PrivateRoute} from "../private-route/private-route";
import { FullOffer} from "../../types/offer";
import { OffersList } from "../../types/offer";
import React from "react";

type AppMainPageProps={
    rentalOffersCount:number;
    offersList:OffersList[];
    offers:FullOffer[];
}
function App({rentalOffersCount,offersList,offers}:AppMainPageProps):React.JSX.Element{
    return(
        <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList}/>}/>
            <Route
            path={AppRoute.Login}
            element={<Login/>}/>
            <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Offer offers={offers}/>}/>
            <Route
            path={AppRoute.Favorites }
            element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites/>
            </PrivateRoute>
            }
            />
            <Route
            path={AppRoute.Offer }
            element={<Offer offers={offers}/>}/>
            <Route
            path={"*"}
            element={<NotFoundPage />}/>
        </Routes>
        </BrowserRouter>
    )
}
export {App};