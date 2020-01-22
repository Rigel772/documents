<script>
  import { db } from "../firebase";
  import Modal from "./UI/Modal.svelte";
  import { modals } from "../store";

  let event_title = "";
  let event_date = "";
  let short_story = "";
  let long_story = "";
  let date = "";
  let koszta = 0;
  let tags = [];
  let doc_link =
    "https://drive.google.com/file/d/1rFmveqM6_azs86SKMf2xLmHBnuRTVMsk/view?usp=sharing";

  function addNewEvent() {
    if (event_title != "" && event_date != "" && short_story != "") {
      db.collection("event").add({
        title: event_title,
        date: event_date,
        short_story: short_story,
        long_story: long_story,
        koszta: koszta,
        doc_link: doc_link
      });
    } else {
      alert("Posze wypelnic przynajmniej 3 pierwsze pola");
    }

    event_title = "";
    event_date = "";
    short_story = "";
    long_story = "";
  }
</script>

<style>
  .wrapper {
    padding: 1em 1em 1em 1em;
    margin: 1em 0;
    background-color: rgb(196, 247, 238);
  }
</style>

<div class="wrapper ">

  <Modal on:close={() => ($modals.addEvent = false)}>
    <div slot="header">
      <h5>Dodaj dokument</h5>
      <p>Tytul {event_title}</p>
      <p>Data {event_date}</p>
      <p>Opis {short_story}</p>
    </div>
    <div slot="content">
      <form class="formularz">
        <div class="row">
          <!-- event title -->
          <input id="tile" type="text" bind:value={event_title} required />
          <label for="tile">Tytuł</label>
        </div>

        <div>
          <!-- event date -->
          <input
            type="date"
            bind:value={event_date}
            placeholder="Krotki opis"
            required />
        </div>
        <div>
          <!-- short story -->
          <input
            type="text"
            bind:value={short_story}
            placeholder="Krotki opis"
            required />
        </div>
        <div>
          <!-- long story -->
          <textarea
            id="opis_dlugi"
            bind:value={long_story}
            placeholder="Wyczerpujacy opis" />
          <label for="opis_dlugi" />
        </div>
        <!-- koszta -->
        <input type="number" bind:value={koszta} placeholder="Podaj kwote" />

        <input
          type="text"
          bind:value={doc_link}
          placeholder="Document link to GDrive" />

      </form>
    </div>
    <div slot="footer">
      <button class="btn green" on:click={addNewEvent}>Dodaj dokument</button>
      <button class="btn green" on:click={() => ($modals.addEvent = false)}>
        Cancel
      </button>
    </div>
  </Modal>

</div>
