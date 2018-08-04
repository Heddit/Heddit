import Rebase from 're-base'

import * as firebase from 'firebase'
var config = {
   apiKey: "AIzaSyDZcrVbDNQtdKmNNeElmS4cFHz--4iw-24",
   authDomain: "heddit-6a482.firebaseapp.com",
   databaseURL: "https://heddit-6a482.firebaseio.com",
   projectId: "heddit-6a482",
   storageBucket: "heddit-6a482.appspot.com",
   messagingSenderId: "975756646086"
 };

// firebase.initializeApp(config)

const firebaseApp = firebase.initializeApp(config)
const databaseBase = Rebase.createClass(firebaseApp.database())

export {databaseBase,firebase}
