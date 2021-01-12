import * as admin from 'firebase-admin';
const serviceAccount = require('./serviceAccount')
//process.env.SERVICE_ACCOUNT

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://movie-db-3edb4-default-rtdb.europe-west1.firebasedatabase.app"
      });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();