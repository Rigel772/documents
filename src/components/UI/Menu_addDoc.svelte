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
    display: inline-block;
    text-decoration: none;
    padding: 1em;

    text-transform: uppercase;
    color: rgb(41, 41, 41);
  }
  a:hover {
    font-weight: 700;
  }
</style>

<a href="#!" on:click={() => ($modals.addEvent = true)}>
  <li>Dodaj</li>
</a>
