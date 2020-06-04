import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Restaurant from '../pages/Restaurants';
import Restaurantdetail from '../pages/RestaurantDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Restaurant} />
        <Route path="/restaurant/:restaurantId" component={Restaurantdetail} />
      </Switch>
    </BrowserRouter>
  );
}
