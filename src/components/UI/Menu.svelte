<script>
  import { modals } from "../../store";
  import { auth } from "../../firebase";
  import Menu_zaloguj from "./Menu_zaloguj.svelte";
  import Menu_wyloguj from "./Menu_wyloguj.svelte";
  // import Menu_addUser from "./Menu_addUser.svelte";
  import Menu_Users from "./Menu_Users.svelte";
  import Menu_addDoc from "./Menu_addDoc.svelte";
  import Users from "../Users.svelte";

  let show_zaloguj_link = true;
  let show_wyloguj_link = false;
  let show_users_link = false;
  let show_add_doc_link = false;

  auth.onAuthStateChanged(function(user) {
    if (user) {
      user.getIdTokenResult().then(token => {
        if (token.claims.admin) {
          // console.log("user is admin");
          show_zaloguj_link = false;
          show_wyloguj_link = true;
          show_users_link = true;
          show_add_doc_link = true;
        } else if (token.claims.editor) {
          // console.log("user is editor");
          show_zaloguj_link = false;
          show_wyloguj_link = true;
          show_add_doc_link = true;
        }
      });
    } else {
      show_zaloguj_link = true;
      show_wyloguj_link = false;
      show_users_link = false;
      show_add_doc_link = false;

      // console.log(" from app.svelte - wylogowany");
    }
  });
</script>

<style>

</style>

<ul id="menu">
  <!-- <a href="#!" on:click|preventDefault={() => ($modals.login = true)}>
    <li>Zaloguj</li>
  </a> -->
  {#if show_zaloguj_link}
    <Menu_zaloguj />
  {/if}
  {#if show_wyloguj_link}
    <Menu_wyloguj />
  {/if}
  {#if show_users_link}
    <Menu_Users />
  {/if}
  {#if show_add_doc_link}
    <Menu_addDoc />
  {/if}

  <!-- <a href="#!" on:click={logout}>
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
  </a> -->

</ul>
