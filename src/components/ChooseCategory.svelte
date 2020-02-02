<script>
  import { db } from "../firebase";
  import { display_category } from "../store";
  import { onMount } from "svelte";

  // onMount($display_category => $display_category);

  let categories = [];

  db.collection("categories").onSnapshot(snapshot => {
    categories = [];
    snapshot.docs.forEach(item => {
      categories = [...categories, item.data().name];
      // console.log(item.data().name);
      // console.log(categories);
      return categories;
    });
  });
</script>

<div class="categories">
  <h4>Zmień kategorie:</h4>

  <select bind:value={$display_category}>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>
</div>
