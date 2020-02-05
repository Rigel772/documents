<script>
  import { db } from "../../firebase";
  import { categories } from "../../store.js";

  let new_category = "";
  let category_name = "";

  db.collection("categories").onSnapshot(snapshot => {
    $categories = [];
    snapshot.docs.forEach(item => {
      $categories = [...$categories, item.id];
      // console.log(item.data().name);
      // console.log(categories);
      return $categories;
    });
  });

  $: category_name =
    new_category
      .toLowerCase()
      .charAt(0)
      .toUpperCase() + new_category.substring(1);

  const addCategory = () => {
    if (category_name != "") {
      console.log(" do dodania: ", category_name);
      // $categories = [...$categories, category_name];
      db.collection("categories")
        .doc(category_name)
        .set({
          selected_tags: [],
          tags: []
        })

        // .then(function(docRef) {
        //   console.log("Document written with ID: ", docRef.id);
        // })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      new_category = "";
    } else {
      console.log(category_name);
    }
  };
</script>

<style>
  div.wrapper {
    padding: 0 1em;
  }
  input {
    width: 100%;
  }
  button {
    margin-top: 1em;
  }
</style>

<div class="wrapper">
  <p>Aktualne kategorie:</p>
  <ul>
    {#each $categories as category}
      <li>{category}</li>
    {/each}
  </ul>
  <input bind:value={new_category} type="text" />
  <button class="btn" on:click={addCategory}>Dodaj</button>
</div>
