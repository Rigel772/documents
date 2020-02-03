<script>
  import { db } from "../../firebase";
  import ChooseCategory from "./ChooseCategory.svelte";

  let new_category = "";
  let category_name = "";
  let categories = [];

  db.collection("categories").onSnapshot(snapshot => {
    categories = [];
    snapshot.docs.forEach(item => {
      categories = [...categories, item.id];
      // console.log(item.data().name);
      // console.log(categories);
      return categories;
    });
  });

  $: category_name =
    new_category
      .toLowerCase()
      .charAt(0)
      .toUpperCase() + new_category.substring(1);

  const addCategory = () => {
    console.log(" do dodania: ", category_name);
    // $categories = [...$categories, category_name];
    db.collection("categories")
      .add({ name: category_name })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    new_category = "";
  };
</script>

<style>
  span {
    padding: 1em;
  }
</style>

<div class="wrapper">

  <div>
    <h3>Dostepne kategorie:</h3>
    {#each categories as category}
      <span>{category}</span>
    {/each}
  </div>
  <p>Dodaj kategorie: {category_name}</p>
  <input bind:value={new_category} type="text" />
  <button class="btn" on:click={addCategory}>Dodaj</button>
</div>
