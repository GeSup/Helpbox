 // Initialize Firebase
 var config = {
 };
 firebase.initializeApp(config);
 const auth = firebase.auth();
 const db = firebase.firestore();

 // update firestore settings
 db.settings({
     timestampsInSnapshots: true
 });
 // Get the modal
 var modal = document.getElementById('modal-signup');

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }