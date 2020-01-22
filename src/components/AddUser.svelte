<script>
  import { db, auth } from "../firebase";
  import { modals } from "../store.js";

  let arrList = [];

  db.collection("event")
    .where("tags", "array-contains", "tag4")
    .orderBy("date", "asc")
    .onSnapshot(snapData => {
      arrList = snapData.docs;
    });

  function addUserClicked(e) {
    e.preventDefault();
    $modals.addUser = false;
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .then(cred => {
        console.log(cred.user);
      });
    email = "";
    password = "";
  }
</script>

<style>

</style>
