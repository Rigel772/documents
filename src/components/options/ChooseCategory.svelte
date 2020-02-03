<script>
  import { db } from "../../firebase";
  import {
    current_category,
    category_tags,
    selected_category_tags
  } from "../../store";
  import { onMount, afterUpdate } from "svelte";
  import {
    saveCurrentCategory,
    getCategoryTags,
    getSelectedCategoryTags,
    updateSelectedCategoryTags
  } from "../Auth.svelte";

  // onMount($current_category => $current_category);

  let categories = [];

  // db.collection("categories").onSnapshot(snapshot => {
  //   categories = [];
  //   snapshot.docs.forEach(item => {
  //     categories = [...categories, item.id];
  //     // console.log(item.data().name);
  //     // console.log(categories);
  //     return categories;
  //   });
  // });
  // function getCategories() {
  db.collection("categories").onSnapshot(snapshot => {
    categories = [];

    snapshot.docs.forEach(item => {
      categories = [...categories, item.id];
      // console.log(item.data().name);
      // console.log("from getCategories", categories);
    });
    // console.log("from getCategories 2", categories);
    return categories;
  });
  // }

  // getCategories();
  // console.log("from ChooseCategory ", categories);

  function handleCategoryChange() {
    /////////TODO save current selected tags before category change
    updateSelectedCategoryTags($current_category, $selected_category_tags);
    //update current category in database
    saveCurrentCategory($current_category);
    //load all category tags
    getCategoryTags($current_category).then(value => ($category_tags = value));
    //load last selected category tags
    getSelectedCategoryTags($current_category).then(
      value => ($selected_category_tags = value)
    );
    console.log("from handleCategoryChange: ", $selected_category_tags);
  }
  // $: console.log("from choose category", $current_category);
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
