import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAfAht1tyG-jQmmKrkrVdG8Duqgjl_-u6g',
  authDomain: 'material-ui-12e91.firebaseapp.com',
  projectId: 'material-ui-12e91',
  storageBucket: 'material-ui-12e91.appspot.com',
  messagingSenderId: '374931035242',
  appId: '1:374931035242:web:55578780d1561661172613'
}
// Initialize Firebase

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
