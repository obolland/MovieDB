const next = require('next')
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const filePath = './movies.json'
const fs = require('fs')
const path = require('path')
const movieData = require(filePath);

app.prepare().then(() => {

  const server = express()
  server.use(bodyParser.json())

  server.get('/api/v1/movies', (req, res) => {
    res.json(movieData)
  })

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = movieData.find(m => m.id === id)
    return res.json(movie)
  })

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body
    movie.id = Math.random().toString(36).substr(2, 5)
    movieData.push(movie)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(movie, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (error) => {
        if (error) {
          return res.status(422).send(error)
        }
        return res.json('Movie secessfully added')
    })
  })

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = req.body
    const movieIndex = movieData.findIndex(m => m.id === id)

    movieData[movieIndex] = movie

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(movieData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Movie has been succesfuly edited!')
    })
  })

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movieIndex = movieData.findIndex(m => m.id === id)
    movieData.splice(movieIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(movieData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Movie has been succesfuly deleted!')
    })
  })


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})