<script>
  import { auth, functions } from "../firebase";
  import { modals } from "../store.js";
  import Modal from "./UI/Modal.svelte";
  import Button from "./UI/Button.svelte";
  let email;
  let password;
  let role = "guest";
  let admin;
  let editor;
  let guest;
  // let guest = false;
  // let cred;

  function addUserClicked() {
    // $modals.addUser = false;
    console.log("add user - email:", email);
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .then(cred => {
        console.log("from create user", cred.user);
      })
      .then(addUserRole)
      .then(() => ($modals.Users = false));
  }

  function addUserRole() {
    const addAdminRole = functions.httpsCallable("addAdminRole");
    const addEditorRole = functions.httpsCallable("addEditorRole");
    if (role == "admin") {
      addAdminRole({ email: email }).then(result => {
        console.log("user given ADMIN role", result);
      });
    } else if (role == "editor") {
      addEditorRole({ email: email }).then(result => {
        console.log("user given EDITOR role", result);
      });
    } else {
      console.log("user given AUTHENTICATED role");
    }
  }
</script>

<style>
  form {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 20px;
    justify-items: flex-start;
  }
</style>

<Modal on:close={() => ($modals.Users = false)}>

  <div slot="header">
    <h2>Lista uzytkownikow</h2>
    (funkcjonalnosc do zrobienia)
    <ul>
      <li>Admin</li>
      <li>Editor</li>
      <li>Gosc</li>
    </ul>
    <h2>Dodaj uzytkownika</h2>
  </div>

  <div slot="content">
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} />

      <label for="password">Password</label>
      <input type="password" id="password" bind:value={password} />

      <label for="admin">Admin</label>
      <input type="radio" id="admin" bind:group={role} value={'admin'} />

      <label for="editor">Editor</label>
      <input type="radio" id="editor" bind:group={role} value={'editor'} />

      <label for="guest">Gosc</label>
      <input
        type="radio"
        id="guest"
        bind:group={role}
        value={'guest'}
        selected />
      <!-- <label>
        <input type="radio" bind:group={role} value={'admin'} />
        Admin
      </label>

      <label>
        <input type="radio" bind:group={role} value={'editor'} />
        Editor
      </label>

      <label>
        <input type="radio" bind:group={role} value={'guest'} selected />
        Gosc
      </label> -->

    </form>
  </div>
  <div slot="footer">
    <a href="#!" on:click|preventDefault={addUserClicked}>
      <Button button_text="Dodaj" />
    </a>
    <a href="#!" on:click={() => ($modals.Users = false)}>
      <Button button_text="Cancel" />
    </a>

  </div>
</Modal>
