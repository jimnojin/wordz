import Firebase from 'firebase'

const app = Firebase.initializeApp({
  apiKey: 'AIzaSyDlRHDAiuExBDUkZXzzrSCatuIyXFYo1o0',
  authDomain: 'wordz-782c7.firebaseapp.com',
  databaseURL: 'https://wordz-782c7.firebaseio.com',
  projectId: 'wordz-782c7',
  storageBucket: 'wordz-782c7.appspot.com',
  messagingSenderId: '205094988756'
})
const db = app.database()

export default db
