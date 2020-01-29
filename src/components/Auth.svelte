<script>
  import { db, auth, functions } from "../firebase.js";

  export const userStatus = auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
    } else {
      console.log("niezalogowany");
    }
  });

  function login(email, pass) {
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  }

  export const logout = () => {
    auth.logout();
  };

  export const addUser = (email, pass, is_admin, is_viewer, is_editor) => {
    const promise = auth.signInWithEmailAndPassword(email, password);
    // add other fields to user object
  };

  export const addCategory = new_category => {
    db.collection("categories")
      .add(new_category)
      .then(function(docRef) {
        console.log("Category created with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error addin new category...", error);
      });
  };

  export const addEvent = new_event => {
    db.collection("events")
      .add(new_event)
      .then(function(docRef) {
        console.log("Category created with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error addin new category...", error);
      });
  };

  export const updateEvent = (event, id) => {
    let eventToUpdate = db.collection("events").doc(id);

    return eventToUpdate
      .update(event)
      .then(function(docRef) {
        console.log("Category created with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error addin new category...", error);
      });
  };

  export { login };
</script>

<style>
  /* your styles go here */
</style>
