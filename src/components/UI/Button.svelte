<script>
  export let button_text = "Nacisnij";
</script>

<style>
  .btn {
    background-color: #4caf50; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #2e6e30;
    color: white;
  }
</style>

<button
  class=" mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect
  mdl-button--accent">
  {button_text}
</button>
