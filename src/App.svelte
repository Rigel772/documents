<script>
  import Menu from "./components/UI/Menu.svelte";
  import ListEvents from "./components/ListEvents.svelte";
  import AddUser from "./components/AddUser.svelte";
  import AddEvent from "./components/AddEvent.svelte";
  import EditEvent from "./components/AddEvent.svelte";
  import Login from "./components/Login.svelte";

  let showModalAddUser = false;
  let showModalAddEvent = false;
  let showModalLogin = false;
  let showModalEditEvent = false;
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
      <Menu {showModalLogin} />
    </div>
  </div>

  <div class="content">

    <div class="listing">
      <ListEvents />
    </div>

    {#if showModalAddUser}
      <AddUser {showModalAddUser} />
    {/if}

    {#if showModalAddEvent}
      <AddEvent {showModalAddEvent} />
    {/if}

    {#if showModalLogin}
      <Login {showModalLogin} />
    {/if}

    {#if showModalEditEvent}
      <EditEvent {showModalEditEvent} />
    {/if}

  </div>

</main>
