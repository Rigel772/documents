<script>
  import { modals } from "../../store";
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

</style>

<a href="#!" on:click={() => ($modals.Users = true)}>
  <li>Users</li>
</a>
