<script>
  import { db, auth } from "../firebase";
  import Modal from "./UI/Modal.svelte";
  import Button from "./UI/Button.svelte";
  import { modals } from "../store.js";
  // import { login } from "./auth.js";

  let email = "";
  let password = "";
  let loginError = "";

  function modalUpdate(value) {
    return (ModalLoginStatus = !value);
  }

  function loginClicked(e) {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        loginError = "Niepoprawne dane logowania";
      })
      .then(cred => {
        // $modals.login = false;
        console.log(cred.user);
        email = "";
        password = "";
        loginError = "";
        $modals.login = false;
      });
  }

  function handleKeyboard() {
    let key = event.key;
    if (key == "Enter") loginClicked();
  }
</script>

<style>
  h3,
  div {
    margin-left: 2em;
  }

  label,
  input {
    display: block;
  }
  input {
    height: 2em;
    margin-bottom: 2em;
  }
</style>

<svelte:window on:keydown={handleKeyboard} />
<Modal on:close={() => ($modals.login = false)}>
  <h3 slot="top">Logowanie</h3>

  <div slot="middle">
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} />

      <label for="password">Hasło</label>
      <input type="password" id="password" bind:value={password} />

    </form>
  </div>
  <div slot="bottom">
    <a href="#!" on:click|preventDefault={loginClicked}>
      <Button button_text="Zaloguj" />
    </a>
    <a href="#!" on:click|preventDefault={() => ($modals.login = false)}>
      <Button button_text="Cancel" />
    </a>
    <div class="login-error">{loginError}</div>

  </div>
</Modal>
