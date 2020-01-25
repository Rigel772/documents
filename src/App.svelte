<script>
  import Menu from "./components/UI/Menu.svelte";
  import ListEvents from "./components/ListEvents.svelte";
  import AddUser from "./components/AddUser.svelte";
  import AddEvent from "./components/AddEvent.svelte";
  import EditEvent from "./components/EditEvent.svelte";
  import Login from "./components/Login.svelte";
  import Options from "./components/Options.svelte";
  import { modals } from "./store";
</script>

<style>
  .container {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0;
  }
  .header {
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  h1 {
    margin: 0;
    padding: 1em;
  }
</style>

<main class="container">

  <div class="header">
    <h1>Dokumenty</h1>
    <div id="menu">
      <Menu />
    </div>
  </div>

  <div class="content">

    {#if $modals.login}
      <Login />
    {/if}

    {#if $modals.addUser}
      <AddUser />
    {/if}

    {#if $modals.addEvent}
      <AddEvent />
    {/if}

    {#if $modals.editEvent}
      <EditEvent />
    {/if}
    <div class="options">
      <Options />
    </div>
    <div class="listing">
      <ListEvents />
    </div>
  </div>

</main>
