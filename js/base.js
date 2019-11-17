 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyDh0Hz4P6f6YRxQMrTXAMWwnKcB5jYhkWI",
     authDomain: "chatbox-4b9dc.firebaseapp.com",
     databaseURL: "https://chatbox-4b9dc.firebaseio.com",
     projectId: "chatbox-4b9dc",
     storageBucket: "chatbox-4b9dc.appspot.com",
     messagingSenderId: "96696942261",
     appId: "1:96696942261:web:887d37a3129e8074f008fc",
     measurementId: "G-WPEZK9RGWZ"
 };
 firebase.initializeApp(config);
 const auth = firebase.auth();
 const db = firebase.database();

 // Get the modal
 var modal = document.getElementById('modal-signup');

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }