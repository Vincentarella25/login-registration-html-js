let submit_email=document.getElementById("submit-email");
let forgetEmail=document.querySelector(".forgetEmail");

import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const auth = getAuth(app);
sendPasswordResetEmail(auth, forgetEmail.value)
  .then(() => {

    forgetEmail="";

    swal("Congrats");
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    swal("Sorry!");
    // ..
  });

