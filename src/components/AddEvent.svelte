<script>
  import { db } from "../firebase";
  import Modal from "./UI/Modal.svelte";
  import { modals, events } from "../store";
  let new_event = {
    title: "",
    date: "",
    brief: "",
    descr: "",
    date: "",
    end_date: "",
    cost: "",
    refund: "",
    tags: [],
    pdf:
      "https://drive.google.com/file/d/1rFmveqM6_azs86SKMf2xLmHBnuRTVMsk/view?usp=sharing"
  };

  function addNewEvent() {
    if (
      new_event.title != "" &&
      new_event.date != "" &&
      new_event.biref != ""
    ) {
      db.collection("events").add(new_event);
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
</style>

<div class="wrapper ">

  <Modal on:close={() => ($modals.addEvent = false)}>
    <div slot="header">
      <h5>Dodaj dokument</h5>
      <p>Tytul {new_event.title}</p>
      <p>Data {new_event.date}</p>
      <p>Opis {new_event.biref}</p>
    </div>
    <div slot="content">
      <form class="formularz">
        <div class="row">
          <!-- event title -->
          <input id="tile" type="text" bind:value={new_event.title} required />
          <label for="tile">Tytuł</label>
        </div>

        <div>
          <!-- event date -->
          <input
            type="date"
            bind:value={new_event.date}
            placeholder="Krotki opis"
            required />
        </div>
        <div>
          <!-- short story -->
          <input
            type="text"
            bind:value={new_event.brief}
            placeholder="Krotki opis"
            required />
        </div>
        <div>
          <!-- long story -->
          <textarea
            id="opis_dlugi"
            bind:value={new_event.descr}
            placeholder="Wyczerpujacy opis" />
          <label for="opis_dlugi" />
        </div>
        <!-- koszta -->
        <input
          type="number"
          bind:value={new_event.cost}
          placeholder="Podaj kwote" />

        <input
          type="text"
          bind:value={new_event.pdf}
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
