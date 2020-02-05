<script context="module">
  import { db, auth, functions } from "../firebase.js";
  // import { current_category } from "../store.js";

  // pobieranie danych z bazy danych i zapisywanie
  // generalnie wszystkie operacje z firebase

  let category_tags = [];
  //curent category
  // let current_category;
  export async function getCurrentCategory() {
    let docRef = db.collection("current").doc("category");
    let snapshot = await docRef.get();
    let current_category = await snapshot.data().name;
    // await (snapshot => current_category = snapshot.doc.data().name);
    // current_category = await ((doc) => console.log("tutaj", doc.data().name))
    // console.log("category from Auth", current_category);
    return current_category;

    // return () => {
    //     // Called when subscriber count goes to 0.
    //     console.log("No such document!");
    // };
  }

  export async function getCategoryTags(category) {
    let docRef = db.collection("categories").doc(category);
    let snapshot = await docRef.get();
    // category_tags = await (snapshot => snapshot.docs.forEach(doc => category_tags = [...category_tags, data().tags]));
    category_tags = await snapshot.data().tags;
    // current_category = await ((doc) => console.log("tutaj", doc.data().name))
    // console.log("tags from Auth ", category_tags);
    return category_tags;

    // return () => {

    //     console.log("No such document!");
    // };
  }

  let selected_category_tags;
  export async function getSelectedCategoryTags(category) {
    let docRef = db.collection("categories").doc(category);
    let snapshot = await docRef.get();
    // category_tags = await (snapshot => snapshot.docs.forEach(doc => category_tags = [...category_tags, data().tags]));
    selected_category_tags = await snapshot.data().selected_tags;
    // current_category = await ((doc) => console.log("tutaj", doc.data().name))
    console.log("tags from Auth ", selected_category_tags);
    return selected_category_tags;

    // return () => {

    //     console.log("No such document!");
    // };
  }
  export async function updateSelectedCategoryTags(category, selected_tags) {
    let docRef = db.collection("categories").doc(category);
    return docRef
      .update({ selected_tags: selected_tags })
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    // return () => {

    //     console.log("No such document!");
    // };
  }

  export async function saveCurrentCategory(new_categ_name) {
    let docRef = db.collection("current").doc("category");
    return docRef
      .update({ name: new_categ_name })
      .then(function() {
        console.log("Document successfully updated!", new_categ_name);
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

  export const login = (email, pass) => {
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  };

  export const logout = () => {
    auth
      .signOut()
      .then(function() {
        console.log("wylogowany");
      })
      .catch(function(error) {
        console.log("cos nie poszlo");
      });
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

  export const addNewEvent = (category, new_event) => {
    if (
      new_event.title != "" &&
      new_event.date != "" &&
      new_event.biref != ""
    ) {
      db.collection(category)
        .add(new_event)
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      new_event.title = "";
      new_event.date = "";
      new_event.brief = "";
      new_event.descr = "";
    } else {
      alert("Posze wypelnic przynajmniej 3 pierwsze pola");
    }
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
  //////////////////TO MUSI BYC W LIST EVENTS
  // let data = [];
  // export async function getEvents(category, tags) {
  //   db.collection(category)
  //     .where("tags", "array-contains-any", tags)
  //     .orderBy("date", "asc")
  //     .get()
  //     .then(
  //       snapshot => {
  //         // console.log("current category do firebase", $current_category);
  //         // console.log("category tags do firebase", $category_tags);
  //         // console.log(snapshot.docs());
  //         data = [];
  //         snapshot.docs.forEach(doc => (data = [...data, doc.data()]));
  //         // console.log("pierwsza", data);
  //         return data;
  //       },
  //       function(error) {
  //         console.log(error);
  //       }
  //     )
  //     .catch(function(error) {
  //       console.log("Error getting document:", error);
  //     });
  // }
</script>
