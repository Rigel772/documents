<script>
  import { db, auth } from "../firebase";
  import Modal from "./UI/Modal.svelte";
  import Button from "./UI/Button.svelte";
  import { modals } from "../store.js";

  let email = "";
  let password = "";

  function modalUpdate(value) {
    return (ModalLoginStatus = !value);
  }

  function loginClicked(e) {
    $modals.login = false;
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      })
      .then(cred => {
        console.log(cred.user);
      });
    email = "";
    password = "";
  }
</script>

<style>

</style>

<Modal on:close={() => ($modals.login = false)}>
  <h2 slot="header">Sign in form</h2>

  <div slot="content">
    <form>
      <input type="email" id="email" bind:value={email} />
      <label for="email">Email</label>

      <input type="password" id="password" bind:value={password} />
      <label for="password">Password</label>
    </form>
  </div>
  <div slot="footer">
    <a href="#!" on:click|preventDefault={loginClicked}>
      <Button button_text="Dodaj" />
    </a>
    <a href="#!" on:click|preventDefault={() => ($modals.login = false)}>
      <Button button_text="Cancel" />
    </a>

  </div>
</Modal>
