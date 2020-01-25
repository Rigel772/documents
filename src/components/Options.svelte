<script>
  import { tags } from "../store.js";
  import { categories } from "../store.js";

  let oskar_tags;
  let tag_value;
  let selected = "Personalne";
  let wybrana;

  console.log("wybrana", wybrana);
  console.log("selected", selected);
</script>

<style>
  .wrapper {
    padding: 0 1em;
  }
  h4,
  select {
    display: inline-block;
  }
  h4 {
    margin-right: 1em;
  }
  label {
    display: inline;
    margin-right: 1em;
  }
</style>

<div class="wrapper">
  <h3>Opcje wyswietlania dla kategorii {selected}</h3>
  <div class="categories">
    <h4>Zmień kategorie:</h4>

    <select bind:value={selected} on:change={() => (wybrana = '')}>
      {#each categories as category}
        <option value={category}>{category}</option>
      {/each}
    </select>
  </div>
  <div class="tags">
    <h4>Tagi:</h4>
    {#each tags as tag}
      <input id={tag} type="checkbox" bind:value={tag_value} checked />
      <label for={tag}>{tag}</label>
    {/each}

  </div>

</div>
