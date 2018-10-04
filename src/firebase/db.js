const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyA4KKrn79eHhIBfyE0Hv9FwFEBbWijGjnw",
  authDomain: "nba-players-a3c1b.firebaseapp.com",
  databaseURL: "https://nba-players-a3c1b.firebaseio.com",
  projectId: "nba-players-a3c1b",
  storageBucket: "nba-players-a3c1b.appspot.com",
  messagingSenderId: "476335619644"
};

firebase.initializeApp(config);

const database = firebase.database()
const playersDB = database.ref().child('players')
const scheduleDB = database.ref().child('schedule')
const statsDB = database.ref().child('stats')


module.exports = {
  database,
  playersDB,
  scheduleDB,
  statsDB,
};

// module.exports = database