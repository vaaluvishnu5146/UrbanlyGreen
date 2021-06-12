import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Switch, Route, Redirect, RouteProps, RouteComponentProps } from 'react-router';
import Listings from './Listings';
import "./Listings.scss";
import ListNewProduct from './ListNewProduct';
const ListingRoutes: React.FC<RouteComponentProps> = ({ match }) => {
    console.log("Listing");

  return (
    <Switch>
        <Route exact path={ `${ match.url }/add-product`} component={ListNewProduct} />
        <Route path={ match.url } component={Listings} />
    </Switch>
  );
};

export default ListingRoutes;
