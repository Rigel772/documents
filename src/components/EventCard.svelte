<script>
  import { auth, db } from "../firebase";
  import Button from "./UI/Button.svelte";
  import Menu_editDoc from "./UI/Menu_editDoc.svelte";
  import EditEvent from "./EditEvent.svelte";
  import { modals, current_event_store } from "../store";

  // export let docID = "";
  // export let title = "";
  // export let date = "";
  // export let end_date = "";
  // export let brief = "";
  // export let descr = "";
  // export let cost = "";
  // export let refund = "";
  // export let tags = [];
  // export let link = "";

  export let item;

  // let current_event = {
  //   id,
  //   title,
  //   date,
  //   end_date,
  //   brief,
  //   descr,
  //   cost,
  //   refund,
  //   tags,
  //   link
  // };
  let current_event = item;
  // console.log("EventCard", $current_event_store);
  // To show the edit doc link only for admins and editors
  let show_edit_doc_link = false;
  auth.onAuthStateChanged(function(user) {
    if (user) {
      user.getIdTokenResult().then(token => {
        if (token.claims.admin) {
          // console.log("user is admin");

          show_edit_doc_link = true;
        } else if (token.claims.editor) {
          // console.log("user is editor");

          show_edit_doc_link = true;
        }
      });
    } else {
      show_edit_doc_link = false;
      // console.log(" from app.svelte - wylogowany");
    }
  });

  //  handler for button show detailed description
  let pokazOpis = false;

  function toggleOpis(e) {
    e.preventDefault();
    pokazOpis = !pokazOpis;
  }

  function deleteItem() {
    if (confirm("Na pewno skasowac?")) {
      db.collection("event")
        .doc(docID)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  }
</script>

<style>
  .card {
    background: #fff;
    border-radius: 2px;
    padding: 1em;
    margin-bottom: 1em;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .szczegoly {
    margin-top: 0.5em;
  }
  .buttons {
    margin-top: 1em;
  }
  .tags {
    margin: 1em 0;
    display: flex;
    flex-wrap: wrap;
  }
  .tag {
    display: inline;
    text-transform: uppercase;
    padding: 0.5em;
    font-weight: 700;
    font-size: 80%;
  }
</style>

{#if $modals.editEvent}
  <EditEvent {current_event} />
{/if}

<div class="card">
  <p>Doc id: {item.id}</p>
  <h5>{item.title}</h5>
  <div class="">

    <div class="">
      <div class="">
        <p>{item.date}</p>
        {item.brief}
        {#if pokazOpis}
          <div class="szczegoly">
            <p>{item.descr}</p>
            <p>
              Poniesione koszta:
              <strong>{item.cost}</strong>
              PLN
            </p>
          </div>
        {/if}

      </div>
      <div id="printHide">

        <div class="buttons">
          <a href="#!" on:click={toggleOpis}>
            <Button button_text="Szczególy" />
          </a>
          <a href={item.link} target="blank">
            <Button button_text="Dokument" />
          </a>

          {#if show_edit_doc_link}
            <Menu_editDoc {current_event} />
          {/if}

          <a href="#!" on:click={deleteItem}>
            <Button button_text="Usuń dokument" />
          </a>

        </div>
        <div class="tags">
          {#each item.tags as tag}
            <div class="tag">{tag}</div>
          {/each}
        </div>
      </div>

    </div>
  </div>

</div>
