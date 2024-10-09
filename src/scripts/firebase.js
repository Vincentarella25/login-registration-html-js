// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1NGZDALcMpgqvXLahebajUYh3Bpto7gk",
    authDomain: "lostandfoundlogin.firebaseapp.com",
    projectId: "lostandfoundlogin",
    storageBucket: "lostandfoundlogin.appspot.com",
    messagingSenderId: "341209196095",
    appId: "1:341209196095:web:fed2255deaf91b595b7a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database services
const db = getDatabase(app);

//FOR SIGNUP 
document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault()

    set(ref(db, 'user/' + document.getElementById("fname").value),
    {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        username: document.getElementById("user").value,
        password: document.getElementById("pass").value,
    })

    alert("Login Successfully!!");

  })

  //FOR SIGNUP


  //FOR SIGNIN


















  //FOR SIGNIN