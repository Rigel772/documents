<script>
  // import { modals } from "../../store";
  // import { auth } from "../../firebase";

  // const logout = () => {
  //   auth
  //     .signOut()
  //     .then(function() {
  //       console.log("wylogowany");
  //     })
  //     .catch(function(error) {
  //       console.log("cos nie poszlo");
  //     });
  // };
  import { logout } from "../auth.js";
</script>

<style>

</style>

<a id="wyloguj" href="#!" on:click={logout}>
  <li>Wyloguj</li>
</a>
