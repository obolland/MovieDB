import Link from 'next/link'

const MovieList = ({ movies }) => {
    
const shorten = (text) => {
  return text.substr(0, 100) + '...'
}

    return (
    <>
      { 
        movies.map(movie => (
          <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a><img className="card-img-top" src={movie.image} alt="" /></a>
            </Link>
            <div className="card-body">
              <h4 className="card-title">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
                </Link>
              </h4>
              <p className="card-text">{shorten(movie.description)}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{movie.rating}
              </small>
              <small className="text-muted float-right">{movie.genre}
              </small>
            </div>
          </div>
        </div>
        ))
      }
    </>
  )}

export default MovieList;