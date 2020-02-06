<script>
  import { modals, current_event_store } from "../../store";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";

  export let current_event;

  //   import { auth } from "../../firebase";

  //   const logout = () => {
  //     auth
  //       .signOut()
  //       .then(function() {
  //         console.log("wylogowany");
  //       })
  //       .catch(function(error) {
  //         console.log("cos nie poszlo");
  //       });
  //   };

  console.log("From Menu_Edit", current_event);
  function handleClick(e) {
    console.log("button Edit from event:", current_event.id);
    // console.log(e);
    $current_event_store = current_event;
    // console.log(current_event.docID);
    // $current_event_store = {};
    // $current_event_store = current_event;
    // console.log($event_store);
    $modals.editEvent = true;
  }
</script>

<style>
  .btn {
    background-color: #4caf50; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #2e6e30;
    color: white;
  }
</style>

<!-- <a href="#!" on:click={() => ($modals.editEvent = true)}> -->
<a href="#!" on:click={handleClick}>
  <Button
    button_text="Edytuj"
    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect
    mdl-button--accent">
    Edytuj
  </Button>
</a>
