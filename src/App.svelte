<script>
  import Menu from "./components/UI/Menu.svelte";
  import ListEvents from "./components/ListEvents.svelte";
  import Users from "./components/Users.svelte";
  import AddEvent from "./components/AddEvent.svelte";
  import EditEvent from "./components/EditEvent.svelte";
  import Login from "./components/Login.svelte";
  import Options from "./components/Options.svelte";
  import { modals } from "./store";
  import Info from "./components/Info.svelte";
  import { auth } from "./firebase";

  function printPdf() {
    window.print();
  }

  let showListing = false;
  let showInfo = true;
  let showOptions = false;
  auth.onAuthStateChanged(function(user) {
    if (user) {
      showListing = true;
      showInfo = false;
      showOptions = true;
    } else {
      showListing = false;
      showInfo = true;
      showOptions = false;
    }
  });
  // console.log(user);
</script>

<style>
  /* **************** LAYOUT ****************** */

  .container {
    max-width: 80rem;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
      " header "
      " options "
      " content "
      " footer ";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    /* grid-gap: 10px; */
  }
  @media only screen and (min-width: 700px) {
    .container {
      display: grid;
      grid-template-areas:
        " header header"
        " options content"
        " footer footer";
      grid-template-columns: min-content 3fr;
      grid-template-rows: auto 1fr 5rem;
      /* grid-gap: 10px; */
    }

    .header {
      grid-area: header;
    }

    .options {
      grid-area: options;
      height: 100vh;
      min-width: 14em;
    }

    .content {
      grid-area: content;
    }

    .footer {
      grid-area: footer;
    }
  }
  /* ********** LAYOUT END **************** */
  /* *********** PRINT ******************** */
  @media print {
    :global(body) {
      height: auto !important;
      overflow: visible !important;
    }

    :global(.container) {
      overflow: visible !important;
    }
    :global(button, a) {
      display: none !important;
    }
    :global(.screen) {
      display: none;
    }
    :global(.print) {
      display: block;
    }
    :global(.section) {
      width: 100%;
      page-break-before: always;
    }
    :global(input, textarea) {
      border: none !important;
      padding: 0;
      resize: none;
      margin: 0;
    }
    :global(.project-item) {
      padding: 0 !important;
      margin: 0 !important;
    }
    :global(h2) {
      color: #ccc !important;
      margin-top: 5px;
      margin-bottom: 30px;
    }
    :global(.builder) {
      display: none;
    }
    :global(p, li, textarea) {
      line-height: 1.5 !important;
    }
    :global(.card) {
      box-shadow: none !important;
    }
    :global(.tags) {
      display: none !important;
    }
  }
  /* *********** PRINT END ******************** */
  .container {
    padding: 0;
  }

  .header {
    color: whitesmoke;
    background-color: rgb(29, 29, 29);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgb(29, 29, 29);
    border-radius: 3px;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); */
  }
  h1 {
    margin: 0;
    padding: 1em;
  }
  .footer {
    background-color: black;
    color: whitesmoke;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer button {
    margin: 0 1em;
  }
</style>

<main class="container">

  <div class="header">
    <h1>Dokumenty</h1>
    <div id="menu">
      <Menu />
    </div>
  </div>
  {#if showOptions}
    <div class="options">
      <Options />
    </div>
  {/if}
  <div class="content">

    {#if $modals.login}
      <Login />
    {/if}

    {#if $modals.Users}
      <Users />
    {/if}

    {#if $modals.addEvent}
      <AddEvent />
    {/if}

    {#if $modals.editEvent}
      <EditEvent />
    {/if}
    {#if showInfo}
      <Info />
    {/if}

    {#if showListing}
      <div id="print-wrapper" class="listing">
        <ListEvents />
      </div>
    {/if}

  </div>

  <div class="footer">
    <button class="btn" on:click={printPdf}>Print</button>
    <p>Dziala tylko w Chrome, aby zapisac wybiez "do pliku pdf"</p>
  </div>
</main>
