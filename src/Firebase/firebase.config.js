import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCusuPSsHbqfbokByYfl4bdENSJ_kGqvaU",
    authDomain: "australian-cuisine.firebaseapp.com",
    projectId: "australian-cuisine",
    storageBucket: "australian-cuisine.appspot.com",
    messagingSenderId: "1002741773422",
    appId: "1:1002741773422:web:ded94bf5ece0edf72fa27f"
};


const app = initializeApp(firebaseConfig);
export default app;