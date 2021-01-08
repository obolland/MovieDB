import React, {useEffect, useState} from 'react'

import SideMenu from '../components/side-menu';
import Carousel from '../components/carousel';
import MovieList from '../components/movie-list';

import {getMovies, getCategories} from '../actions/index';

const Home = ({ movies, images, categories }) => {
  const [filter, setFilter] = useState('all')
  
  const changeCategory = (category) => {
    setFilter(category)
  }

  const filterMovies = (movies) => {
    if (filter === 'all'){
      return movies
    }

    return movies.filter(movie => {
      return movie.genre && movie.genre.includes(filter)
    })
  }

  return (
  <div>
    <div className="home-page">
      
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                changeCategory={changeCategory}
                activeCategory={filter}
                categories={categories}/>
            </div>
            <div className="col-lg-9">
              <Carousel images={images}/>
                <h2 className="mt-4 mb-3">Showing all {filter !== 'all' ? filter : 'movies'}</h2>
                <div className="row">
                  <MovieList movies={filterMovies(movies)}/>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )}

  Home.getInitialProps = async () => {
    const categories = await getCategories()
    const movies = await getMovies()
    //console.log(movies)
    const images = movies.map(movie => {
      return {
        id: `image-${movie.id}`,
        url: movie.cover,
        name: movie.name
      }
    })
    //console.log(images)
    
    return {
      movies,
      images,
      categories
    }
  }

export default Home;

