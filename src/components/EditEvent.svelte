<script>
  import { db } from "../firebase";
  import Modal from "./UI/Modal.svelte";
  import {
    modals,
    current_event_store,
    category_tags,
    current_category
  } from "../store.js";
  import { updateEvent } from "./auth.js";
  console.log("Edit Event");
  // export let current_event;

  // let edited_event = event.store;

  // export let current_event;

  // console.log("edited event", edited_event);
  // console.log("event store", event_store);

  // function updateEvent() {
  //   console.dir($event_store);
  //   let doc_id = $event_store.docID;
  //   let doc = $event_store;
  //   console.log("id ", doc_id);
  //   console.log("doc ", doc);
  //   db.collection("events")
  //     .doc(doc_id)
  //     .set({ ...doc });
  // }

  const handleZapisz = () => {
    // console.log("category to update: ", $current_category);
    // console.log("event id do update", $current_event_store.id);
    updateEvent(
      $current_category,
      $current_event_store,
      $current_event_store.id
    );
    $modals.editEvent = false;
  };
  // console.dir("edit ttt", $current_event);
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

  <Modal on:close={() => ($modals.editEvent = false)}>
    <div slot="top">
      <h2>Edycja dokumentu</h2>
      <!-- <p>Tytul {new_event.title}</p>
      <p>Data {new_event.date}</p>
      <p>Opis {new_event.biref}</p>
      <p>Tags {new_event.tags}</p> -->
    </div>
    <div slot="middle">
      <form>
        <div class="title">
          <!-- title -->
          <label for="tile">Tytuł</label>
          <input
            id="tile"
            type="text"
            bind:value={$current_event_store.title}
            required />
        </div>

        <div class="date">
          <!-- date -->
          <label for="date">Data</label>
          <input type="date" bind:value={$current_event_store.date} required />
        </div>
        <div class="date">
          <!-- event end date -->
          <label for="end-date">Końcowa data (opcjonalnie)</label>
          <input
            type="date"
            bind:value={$current_event_store.end_date}
            required />
        </div>
        <div class="brief">
          <!-- biref -->
          <label>Krótki opis</label>
          <input type="text" bind:value={$current_event_store.brief} required />
        </div>
        <div class="descr">
          <!-- descr -->
          <label>Szczegółowy opis</label>
          <textarea id="opis_dlugi" bind:value={$current_event_store.descr} />
          <label for="opis_dlugi" />
        </div>
        <!-- koszta -->
        <div class="cost">
          <label>Koszta</label>
          <input type="number" bind:value={$current_event_store.cost} />
        </div>
        <div class="refund">
          <label>Refund</label>
          <input type="number" bind:value={$current_event_store.refund} />
        </div>

        <div class="link">
          <label>Link do dokumentu</label>
          <input type="text" bind:value={$current_event_store.link} />
        </div>

      </form>
      <h4>Tagi:</h4>
      <div class="tags">
        {#each $category_tags as tag}
          <div class="tag">
            <input
              id={tag}
              type="checkbox"
              bind:group={$current_event_store.tags}
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

      <!-- <h4>Dodaj tagi:</h4>
      <div class="tags">
        {#each $event_store.tags as tag}
          <div class="tag">
            <input id={tag} type="checkbox" bind:group={$tags} value={tag} />
            <label for={tag}>{tag}</label>

            
          </div>
        {/each}

      </div> -->
    </div>
    <div slot="bottom">
      <button class="btn green" on:click={handleZapisz}>Zapisz</button>
      <button class="btn green" on:click={() => ($modals.editEvent = false)}>
        Cancel
      </button>
    </div>
  </Modal>

</div>
