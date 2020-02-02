<script>
  import { tags, filter_tags, display_category } from "../store.js";
  import AddCategory from "./AddCategory.svelte";
  import ChooseCategory from "./ChooseCategory.svelte";
  import ShowTags from "./ShowTags.svelte";
  import { db } from "../firebase";

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
  let tmp = $filter_tags;
  const updateTagsState = e => {
    // console.log("clicked", e);
    // updateTagsForCategory();
    let tag_name = e.target.value;
    // console.log("wybrany tag: ", tag_name);
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
    background-color: #dddddd;
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
    KATERGORIA
    <strong>{$display_category}</strong>
  </h3>
  <h4>Tagi:</h4>
  <div class="tags">
    {#each tags as tag}
      <div class="tag" data-target={tag}>

        <label>
          <input
            on:click={updateTagsState}
            class="checkbox"
            type="checkbox"
            name="tagi"
            value={tag}
            bind:group={tmp} />
          {tag}
        </label>
      </div>
    {/each}

  </div>

  <div class="new-category">
    <AddCategory />
  </div>
  <ShowTags />

</div>
