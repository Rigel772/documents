<script>
  import { db } from "../firebase";
  import Modal from "./UI/Modal.svelte";
  import { modals, events, tags, categories, display_category } from "../store";
  let new_event = {
    title: "",
    date: "",
    brief: "",
    descr: "",
    date: "",
    end_date: "",
    cost: "",
    refund: "",
    tags: tags,
    link:
      "https://drive.google.com/file/d/1rFmveqM6_azs86SKMf2xLmHBnuRTVMsk/view?usp=sharing"
  };

  let available_tags = tags;
  // let choosen_tags = tags;
  let collection_name = $display_category.toLowerCase();

  function addNewEvent() {
    if (
      new_event.title != "" &&
      new_event.date != "" &&
      new_event.biref != ""
    ) {
      db.collection($display_category).add(new_event);
    } else {
      alert("Posze wypelnic przynajmniej 3 pierwsze pola");
    }

    new_event.title = "";
    new_event.date = "";
    new_event.brief = "";
    new_event.descr = "";
  }
</script>

<style>
  .wrapper {
    padding: 1em 1em 1em 1em;
    margin: 1em 0;
    background-color: rgb(196, 247, 238);
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
  .title,
  .brief,
  .descr,
  .link,
  .tags {
    grid-column: 1 / span 2;
  }
  .date {
    display: inline-block;
  }
  form input,
  form textarea {
    width: 100%;
  }
  div.tags {
    display: flex;
    flex-wrap: wrap;
  }
  .tags label {
    display: inline-block;

    margin-right: 1em;
  }
  .tags input {
    display: inline-block;
  }
</style>

<div class="wrapper ">

  <Modal on:close={() => ($modals.addEvent = false)}>
    <div slot="header">
      <h2>Dodaj dokument</h2>
      <!-- <p>Tytul {new_event.title}</p>
      <p>Data {new_event.date}</p>
      <p>Opis {new_event.biref}</p>
      <p>Tags {new_event.tags}</p> -->
      <div class="categories">
        <h4>Zmień kategorie:</h4>

        <select bind:value={$display_category}>
          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
      </div>
    </div>
    <div slot="content">
      <form>
        <div class="title">
          <!-- title -->
          <label for="tile">Tytuł</label>
          <input id="tile" type="text" bind:value={new_event.title} required />
        </div>

        <div class="date">
          <!-- date -->
          <label for="date">Data</label>
          <input type="date" bind:value={new_event.date} required />
        </div>
        <div class="date">
          <!-- event end date -->
          <label for="end-date">Końcowa data (opcjonalnie)</label>
          <input type="date" bind:value={new_event.end_date} required />
        </div>
        <div class="brief">
          <!-- biref -->
          <label>Krótki opis</label>
          <input type="text" bind:value={new_event.brief} required />
        </div>
        <div class="descr">
          <!-- descr -->
          <label>Szczegółowy opis</label>
          <textarea id="opis_dlugi" bind:value={new_event.descr} />
          <label for="opis_dlugi" />
        </div>
        <!-- koszta -->
        <div class="cost">
          <label>Koszta</label>
          <input type="number" bind:value={new_event.cost} />
        </div>
        <div class="refund">
          <label>Refund</label>
          <input type="number" bind:value={new_event.refund} />
        </div>

        <div class="link">
          <label>Link do dokumentu</label>
          <input
            type="text"
            bind:value={new_event.link}
            placeholder="Document link to GDrive" />
        </div>

      </form>
      <h4>Tagi:</h4>
      <div class="tags">
        {#each available_tags as tag}
          <div class="tag">
            <input
              id={tag}
              type="checkbox"
              bind:group={new_event.tags}
              value={tag} />
            <label for={tag}>{tag}</label>

            <!-- <label for={tag}>
  
                <input
                  id={tag}
                  type="checkbox"
                  bind:group={new_event.tags}
                  value={tag} />
                {tag}
              </label> -->
          </div>
        {/each}

      </div>

    </div>
    <div slot="footer">
      <button class="btn green" on:click={addNewEvent}>Dodaj dokument</button>
      <button class="btn green" on:click={() => ($modals.addEvent = false)}>
        Cancel
      </button>
    </div>
  </Modal>

</div>
