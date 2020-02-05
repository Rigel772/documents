<script>
  import { db } from "../firebase";
  import { current_category, category_tags } from "../store";
  // import { onMount, afterUpdate } from "svelte";
  import { saveCurrentCategory } from "./Auth.svelte";

  // onMount(()=> {

  // });

  let categories = [];

  db.collection("categories").onSnapshot(snapshot => {
    categories = [];
    snapshot.docs.forEach(item => {
      categories = [...categories, item.id];
      // console.log(item.data().name);
      console.log(categories);
      return categories;
    });
  });

  function handleCategoryChange() {
    //update current category in database
    saveCurrentCategory($current_category);
    //load all category tags
    getCategoryTags().then(tags => ($category_tags = tags));
    //load last choosen category tags
  }
  $: console.log("from choose category", $current_category);
  // afterUpdate(() => {
  //   saveCurrentCategory($current_category);
  // });
  // $: () => {
  //   $current_category = $current_category;
  //   saveCurrentCategory($current_category);
  //   console.log("cat changed", $current_category);
  // };
</script>

<div class="categories">
  <h4>Zmień kategorie:</h4>

  <select bind:value={$current_category} on:change={handleCategoryChange}>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>
</div>
