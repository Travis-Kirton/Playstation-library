import firebase from 'firebase';
import 'firebase/storage';

// Configure Firebase
// Ideally variables kept in secret CI/CD environment vars
const config = {
  apiKey: 'AIzaSyCKfbFJZUTtLo7ZhDLq6AbCTqFClKg2u3M',
  authDomain: 'playstation-gamelibfirebaseapp.com',
  storageBucket: 'playstation-gamelib.appspot.com'
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
