import firebase from '../../../lib/firebase';


export default async(req, res) => {
    switch (req.method) {
        case 'GET':
            const movieById = await firebase.collection('movies').doc(req.query.id).get();
            res.json(movieById.data())
        break
        case 'DELETE':
            const response = await firebase.collection('movies').doc(req.query.id).delete();
            res.json({message: "movie deleted"})
        break
      default:
        res.status(405).end() //Method Not Allowed
        break
    }
  }


  