<script>
  import { modals } from "../../store";
  import Button from "./Button.svelte";
  //   import { auth } from "../../firebase";

  //   const logout = () => {
  //     auth
  //       .signOut()
  //       .then(function() {
  //         console.log("wylogowany");
  //       })
  //       .catch(function(error) {
  //         console.log("cos nie poszlo");
  //       });
  //   };
</script>

<style>
  a {
    margin-right: 1em;
  }
</style>

<a href="#!" on:click|preventDefault={() => ($modals.login = true)}>
  <Button button_text="Zaloguj">Zaloguj</Button>
</a>
