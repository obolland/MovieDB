import { useRouter } from 'next/router'
import Link from 'next/link'

import { getMovieById, deleteMovie} from '../../../actions'

const Movie = ({ movie }) => {
    const router = useRouter();
    const { id } = router.query;

    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            router.push('/')
        })
    }
    
    return ( 
    <div className='container'>
        <div className="jumbotron text-center">
            <div className="w-60 mx-auto">
            <h1 className="display-4">{movie.name}</h1>
            <img className="img-item mt-2 mb-3" src={movie.image} />
            <p className="lead">{movie.description}</p>
            <hr className="my-4" />
            <p>{movie.genre}</p>
            <Link href={`/movies/${id}/edit`}>
                <button className="btn btn-warning btn-lg mr-1" role="button">Edit Movie</button>
            </Link>
            <button onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg ml-1" href="#" role="button">Delete Movie</button>
        </div>
        </div>
        <style jsx>
            {`
                .img-item {
                    max-height: 800px;
                }
            `}
        </style>
    </div>
)}

Movie.getInitialProps = async ({ query }) => {
    const movie = await getMovieById(query.id)
    return {
        movie
    }
}

export default Movie;