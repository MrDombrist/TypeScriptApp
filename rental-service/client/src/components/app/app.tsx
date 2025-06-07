import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from "../../pages/main-page/main-page";
import { Favorites } from "../../pages/favorites/favorites";
import { Login } from "../../pages/login/login";
import { Offer } from "../../pages/offer/offer";
import { NotFound } from "../../pages/not-found/not-found";
import { AppRoute, AuthorizationStatus } from "../const";
import { PrivateRoute } from '../private-route/private-route';
import { FullOffer } from '../../types/offer';

type AppProps = {
    offers: FullOffer[];
}

function App({ offers }: AppProps){
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage offers={offers} />}
                />
                <Route
                    path={AppRoute.Login}
                    element={<Login />}
                />
                <Route
                    path={ AppRoute.Favorites }
                    element={
                        <PrivateRoute
                            authorizationStatus={ AuthorizationStatus.NoAuth }
                        >
                    <Favorites />

                    </PrivateRoute>
            }
          />

                <Route
                    path={AppRoute.Offer}
                    element={<Offer offers={offers} />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export {App};