<script>
  import Button from "./UI/Button.svelte";

  export let id = "";
  export let title = "";
  export let date = "";
  export let brief = "";
  export let descr = "";
  export let cost = "";
  export let tags = [];
  export let pdf = "";

  let pokazOpis = false;

  function toggleOpis(e) {
    e.preventDefault();
    pokazOpis = !pokazOpis;
  }
</script>

<style>
  .card {
    background: #fff;
    border-radius: 2px;
    padding: 1em;
    margin-bottom: 1em;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .szczegoly {
    margin-top: 0.5em;
  }
</style>

<div class="card">
  <h3>{id}</h3>
  <h3>{title}</h3>
  <div class="">

    <div class="">
      <div class="">
        <p>{date}</p>
        {brief}
        {#if pokazOpis}
          <div class="szczegoly">
            <p>{descr}</p>
            <p>
              Poniesione koszta:
              <strong>{cost}</strong>
              PLN
            </p>
          </div>
        {/if}

        <p>{tags}</p>

      </div>

      <div class="">
        <a href="#!" on:click={toggleOpis}>
          <Button button_text="Szczególy" />
        </a>
        <a href={pdf} target="blank">
          <Button button_text="PDF" />
        </a>

      </div>
    </div>
  </div>

</div>
