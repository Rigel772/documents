<script>
  import {
    tags,
    filter_tags,
    current_category,
    category_tags
  } from "../store.js";
  import EditCategories from "./EditCategories.svelte";
  import ChooseCategory from "./ChooseCategory.svelte";
  import CategoryTags from "./CategoryTags.svelte";
  import { db } from "../firebase";

  let oskar_tags;
  let tag_value;
  let selected = "";
  let categories = [];

  console.log("from options ", $category_tags);
  // let showTagsComponent;

  // function updateTagsForCategory() {
  //   showTagsComponent.document_tags;
  // }

  // console.log("wybrana", wybrana);
  // console.log("selected", selected);

  // console.log($filter_tags);
  // let tmp = $filter_tags;
  const updateTagsState = e => {
    // console.log("clicked", e);
    // updateTagsForCategory();
    console.log($category_tags);
    let tag_name = e.target.value;
    console.log("wybrany tag: ", tag_name);
    // console.log("tag przed operacja: ", tmp);
    // console.log(tmp.includes.)
    if ($filter_tags.indexOf(tag_name) === -1) {
      $filter_tags = [...$filter_tags, tag_name];
      // console.log("dodawanie taga ", tag_name);
    } else {
      // console.log("usuwanie taga ", tag_name);
      $filter_tags = $filter_tags.filter(item => item !== tag_name);
    }

    console.log($filter_tags);
  };
</script>

<style>
  .wrapper {
    padding: 1em;
    margin: 1em;
    background-color: #f3b4b4;
    height: 100%;
    border-radius: 3px;
  }
  h4,
  select {
    display: inline-block;
  }
  h4 {
    margin-right: 1em;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  label {
    display: inline;
    margin-right: 1em;
  }
</style>

<div class="wrapper">
  <ChooseCategory />
  <h3>
    KATERGORIA DDDD
    <strong>{$current_category} {$category_tags}</strong>
  </h3>
  <h4>Tagi:</h4>
  <div class="tags">
    {#each $category_tags as tag}
      <div class="tag" data-target={tag}>

        <label>
          <input
            on:click={updateTagsState}
            class="checkbox"
            type="checkbox"
            name="tagi"
            value={tag}
            bind:group={$category_tags} />
          {tag}
        </label>
      </div>
    {/each}

  </div>

  <div class="new-category">
    <EditCategories />
  </div>
  <CategoryTags />

</div>
