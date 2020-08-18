import firebase from "firebase"

const firebaseConfig = {
	apiKey: "AIzaSyALOJCzCkYURQ36TS2KmcJKRsg0Hm5dN5o",
	authDomain: "slack-clone-clever-programmer.firebaseapp.com",
	databaseURL: "https://slack-clone-clever-programmer.firebaseio.com",
	projectId: "slack-clone-clever-programmer",
	storageBucket: "slack-clone-clever-programmer.appspot.com",
	messagingSenderId: "63308141825",
	appId: "1:63308141825:web:af51d77a57cde66a99b700",
	measurementId: "G-6GV07GD6ZY",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
