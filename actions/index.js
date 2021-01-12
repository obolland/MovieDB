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
  
//https://movie-db-jade.vercel.app
//http://localhost:3000

let baseUrl = '';
process.env.VERCEL_ENV === "production" ? baseUrl = process.env.VERCEL_URL : baseUrl = 'http://localhost:3000';

  export const getMovies = async () => {
    const res = await axios.get(`https://movie-db-jade.vercel.app/api/movies`)
    return res.data
  }

  export const getMovieById = async (id) => {
    const res = await axios.get(`https://movie-db-jade.vercel.app/api/movies/${id}`)
    return res.data
  }

  export const addMovie = async (movie) => {

    const res = await axios.post(`https://movie-db-jade.vercel.app/api/movies`, movie)
    return res.data
  }

  export const updateMovie = async (movie) => {
    const res = await axios.patch(`https://movie-db-jade.vercel.app/movies/update/${movie.id}`, movie)
    return res.data
  }

  export const deleteMovie = async (id) => {
    const res = await axios.delete(`https://movie-db-jade.vercel.app/api/movies/${id}`)
    return res.data
  }