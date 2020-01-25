<script>
  import { modals } from "../../store";

  const logout = () => console.log("wylogowywanie");
</script>

<style>
  li {
    display: inline-block;
    margin: 0 1em;
  }
</style>

<ul>
  <a href="#!" on:click|preventDefault={() => ($modals.login = true)}>
    <li>Zaloguj</li>
  </a>
  <a href="#!" on:click={logout}>
    <li>Wyloguj</li>
  </a>
  <a href="#!" on:click={() => ($modals.addUser = true)}>
    <li>Add User</li>
  </a>
  <a href="#!" on:click={() => ($modals.addEvent = true)}>
    <li>Add doc</li>
  </a>
  <a href="#!" on:click={() => ($modals.editEvent = true)}>
    <li>Edit doc</li>
  </a>

</ul>
