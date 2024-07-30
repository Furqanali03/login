import { signOut , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    
  } else {
    window.location = "index.html"
  }
});

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location = "index.html";
    })
    .catch((error) => {
      console.log(error);
    });
});
