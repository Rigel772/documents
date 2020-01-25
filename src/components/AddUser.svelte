<script>
  import { auth } from "../firebase";
  import { modals } from "../store.js";
  import Modal from "./UI/Modal.svelte";
  import Button from "./UI/Modal.svelte";
  let email;
  let password;
  function addUserClicked(e) {
    e.preventDefault();
    $modals.addUser = false;
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
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

<Modal on:close={() => ($modals.addUser = false)}>
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
    <a href="#!" on:click|preventDefault={addUserClicked}>
      <Button button_text="Dodaj" />
    </a>
    <a href="#!">
      <Button button_text="Cancel" />
    </a>

  </div>
</Modal>
