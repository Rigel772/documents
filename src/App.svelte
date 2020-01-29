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
  // import { userStatus } from "./components/Auth.svelte";
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
      grid-template-columns: 30rem 1fr;
      grid-template-rows: auto 1fr 10rem;
      /* grid-gap: 10px; */
    }

    .header {
      grid-area: header;
    }

    .options {
      grid-area: options;
      height: 100vh;
    }

    .content {
      grid-area: content;
    }

    .footer {
      grid-area: footer;
    }
  }
  /* ********** LAYOUT END **************** */
  .container {
    padding: 0;
  }

  .header {
    background-color: rgb(151, 255, 154);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  h1 {
    margin: 0;
    padding: 1em;
  }
  .footer {
    background-color: black;
    color: whitesmoke;
    padding: 3em;
  }
</style>

<main class="container">

  <div class="header">
    <h1>Dokumenty</h1>
    <div id="menu">
      <Menu />
    </div>
  </div>
  <div class="options">
    <Options />
  </div>
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
    <!-- <Info /> -->

    <div class="listing">
      <ListEvents />
    </div>

  </div>
  <div class="footer">To jest footer</div>
</main>
