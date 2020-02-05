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
  a {
    padding-left: 1em;
  }
</style>

<!-- <a href="#!" on:click={() => ($modals.addEvent = true)}>
  <li>Dodaj</li>
</a> -->
<a href="#!" on:click={() => ($modals.addEvent = true)}>
  <button>Nowy dokument</button>
</a>
