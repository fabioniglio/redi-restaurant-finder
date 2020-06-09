import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, HeaderContent, RestaurantList } from './styles';

import restaurantImg from '../../assets/restaurant.png';

function Restaurants() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [restaurants, setRestaurants] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        'https://redi-final-restaurants.herokuapp.com/restaurants',
      );
      const data = await response.json();
      console.log(data.results);
      setIsLoaded(true);
      setRestaurants(data.results);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [setRestaurants]);

  return (
    <Container>
      <Header>
        <img src={restaurantImg} alt="restaurant" />
        <h1>
          <p>Support Local Restaurants</p>
          <p>Eat Great Food</p>
        </h1>
        <HeaderContent></HeaderContent>
      </Header>

      <RestaurantList>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Link to={`restaurant/${restaurant.id}`}>{restaurant.name}</Link>
            </li>
          ))}
        </ul>
      </RestaurantList>
    </Container>
  );
}

export default Restaurants;
