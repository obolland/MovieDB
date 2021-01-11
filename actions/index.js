import axios from 'axios';

  const CATEGORY_DATA = [
    {id: 'c-0', name: 'all'},
    {id: 'c-1', name: 'drama'},
    {id: 'c-2', name: 'history'},
    {id: 'c-3', name: 'action'},
    {id: 'c-4', name: 'comedy'},
    {id: 'c-5', name: 'crime'},
    {id: 'c-6', name: 'adventure'},
    {id: 'c-7', name: 'fantasy'},
  ]

  export const getCategories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CATEGORY_DATA)
        reject('Could not resolve Category Data')
      }, 50)
    })
  }

  export const getMovies = async () => {
    const res = await axios.get('http://localhost:3000/api/movies')
    return res.data
  }

  export const getMovieById = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/movies/${id}`)
    return res.data
  }

  export const addMovie = async (movie) => {

    const res = await axios.post('http://localhost:3000/api/movies', movie)
    return res.data
  }

  export const updateMovie = async (movie) => {
    const res = await axios.patch(`http://localhost:3000/api/movies/update/${movie.id}`, movie)
    return res.data
  }

  export const deleteMovie = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/movies/${id}`)
    return res.data
  }