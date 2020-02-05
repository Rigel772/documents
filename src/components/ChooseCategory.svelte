<script>
  import { db } from "../firebase";
  import {
    current_category,
    category_tags,
    selected_category_tags
  } from "../store";
  // import { onMount, afterUpdate } from "svelte";
  import { saveCurrentCategory, getCategoryTags } from "./auth.js";

  // onMount(()=> {

  // });

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

  function handleCategoryChange(e) {
    $current_category = e.srcElement.innerText;
    console.log("category changed to: ", $current_category);
    //update current category in database
    saveCurrentCategory($current_category);
    //load all category tags
    getCategoryTags($current_category).then(tags => ($category_tags = tags));
    //set selected tags to emplty so ListEvets shows all documents in new category
    $selected_category_tags = [];
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

<!-- <div class="categories">
  <h4>Zmień kategorie:</h4>

  <select bind:value={$current_category} on:change={handleCategoryChange}>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>
</div> -->

<div class="events-avatar-dropdown">
  <span>
    <h4>{$current_category}</h4>
  </span>
  <div class="mdl-layout-spacer" />
  <button
    id="accbtn"
    class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
    <i class="material-icons" role="presentation">arrow_drop_down</i>
    <span class="visuallyhidden">Accounts</span>
  </button>
  <ul
    class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
    for="accbtn">
    {#each categories as category}
      <li class="mdl-menu__item" on:click|preventDefault={handleCategoryChange}>
        {category}
      </li>
    {/each}

  </ul>
</div>
