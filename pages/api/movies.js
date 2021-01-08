import { firestore } from 'firebase-admin';
import firebase from '../../lib/firebase';

export default async(req, res) => {
    if (req.method === "GET") {
    const moviesRef = firebase
            .collection('movies');
            const snapshot = await moviesRef.get();
            const movies = [];
            snapshot.forEach(doc => {
                movies.push({ id: doc.id, ...doc.data() })
            })
            res.json(movies)
    } 
    
    
    else {
        const movie = req.body;
        const response = await firebase.collection('movies').add(movie);
        console.log(movie)
        res.json({ message:'Added document'})
    }

};