<script>
  import {
    tags,
    current_category,
    category_tags,
    selected_category_tags
  } from "../../store.js";
  import EditCategories from "./EditCategories.svelte";
  import ChooseCategory from "./ChooseCategory.svelte";
  import CategoryTags from "./CategoryTags.svelte";
  import { db } from "../../firebase";
  import { updateSelectedCategoryTags } from "../auth.js";
  let oskar_tags;
  let tag_value;
  let selected = "";
  let categories = [];

  // let showTagsComponent;

  // function updateTagsForCategory() {
  //   showTagsComponent.document_tags;
  // }

  // console.log("wybrana", wybrana);
  // console.log("selected", selected);

  // console.log($filter_tags);
  let tmp = $selected_category_tags;
  const updateTagsState = e => {
    // console.log("clicked", e);
    // updateTagsForCategory();
    let tag_name = e.target.value;
    // console.log("wybrany tag: ", tag_name);
    // console.log("tag przed operacja: ", tmp);
    // console.log(tmp.includes.)
    if ($selected_category_tags.indexOf(tag_name) === -1) {
      $selected_category_tags = [...$selected_category_tags, tag_name];
      // console.log("dodawanie taga ", tag_name);
    } else {
      // console.log("usuwanie taga ", tag_name);
      $selected_category_tags = $selected_category_tags.filter(
        item => item !== tag_name
      );
    }
    updateSelectedCategoryTags($current_category, $selected_category_tags);

    console.log($selected_category_tags);
  };
</script>

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1em;
  }
  label {
    display: inline;
    margin-right: 1em;
  }
</style>

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
          bind:group={$selected_category_tags} />
        {tag}
      </label>
    </div>
  {/each}

</div>
