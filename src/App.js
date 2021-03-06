import React from 'react';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Higher Order Components

import MovieHOC from './HOC/Movie.HOC';
import MoviePage from './Components/Pages/Movie.Page';

// Pages

import HomePage from './Components/Pages/Home.Page';
import DefaultHOC from './HOC/Default.HOC';


function App() {
  return <>
    <DefaultHOC path='/' exact component={HomePage} />
    <MovieHOC path='/movie/:id' exact component={MoviePage} />
  </>;
}
export default App;
