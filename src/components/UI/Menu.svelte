<script>
  let showModalAddUser = false;
  let showModalAddEvent = false;
  let showModalLogin = false;
  let showModalEditEvent = false;

  const logout = () => console.log("wylogowywanie");
</script>

<style>
  li {
    display: inline-block;
    margin: 0 1em;
  }
</style>

<ul>
  <a href="#!" on:click|preventDefault={() => (showModalLogin = true)}>
    <li>Zaloguj</li>
  </a>
  <a href="#!" on:click={logout}>
    <li>Wyloguj</li>
  </a>
  <a href="#!" on:click={() => (showModalAddUser = true)}>
    <li>Users</li>
  </a>
  <a href="#!" on:click={() => (showModalAddEvent = true)}>
    <li>Add doc</li>
  </a>
  <a href="#!" on:click={() => (showModalEditEvent = true)}>
    <li>Edit doc</li>
  </a>

</ul>
