import firebase from '../../../../lib/firebase';

export default async(req, res) => {
    const movie = req.body;
    const movieId = movie.id;
    const movieRef = firebase.collection('movies').doc(movieId);
    const response = await movieRef.update(movie);
    res.json({message: "movie updated"})
}

//problem is we do not have movie.id (undefined) because the ID was being sent as part of the movie document
//and now it's the name of the movie document