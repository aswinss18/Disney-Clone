const firebaseConfig = {
  apiKey: "AIzaSyBmYXrOCRnEonqHyGmthXNUhzzAQd3oxxw",
  authDomain: "disneyplus-clone-11764.firebaseapp.com",
  projectId: "disneyplus-clone-11764",
  storageBucket: "disneyplus-clone-11764.appspot.com",
  messagingSenderId: "392389369892",
  appId: "1:392389369892:web:862ea34b4e9e1daf39b8b1",
  measurementId: "G-EFR334VM6T",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
