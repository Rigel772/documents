<script>
  import { db, auth } from "../firebase";
  import Modal from "./UI/Modal.svelte";
  import Button from "./UI/Button.svelte";

  let arrList = [];
  let email = "";
  let password = "";
  export let showModalLogin = false;

  db.collection("event")
    .where("tags", "array-contains", "tag4")
    .orderBy("date", "asc")
    .onSnapshot(snapData => {
      arrList = snapData.docs;
    });

  function deleteItem(itemId) {
    db.collection("event")
      .doc(itemId)
      .delete();
  }

  function loginClicked(e) {
    e.preventDefault();
    showModalSignin = false;
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

<Modal on:close={() => (showModalLogin = false)}>
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
    <Button button_text="Dodaj" on:click={loginClicked} />
    <Button button_text="Cancel" on:click={() => (showModalLogin = false)} />
    <a href="#!" class="btn">Sign up</a>
    <a href="#!" class="btn" }>Cancel</a>
  </div>
</Modal>
