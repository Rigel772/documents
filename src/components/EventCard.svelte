<script>
  import Button from "./UI/Button.svelte";

  export let event_title = "";
  export let event_date = "";
  export let short_story = "";
  export let long_story = "";
  export let koszta = "";
  export let tags = [];
  export let doc_link = "";

  let pokazOpis = false;

  function toggleOpis(e) {
    e.preventDefault();
    pokazOpis = !pokazOpis;
  }
</script>

<style>
  .card {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1em;
    margin-bottom: 1em;
  }

  .szczegoly {
    margin-top: 0.5em;
  }
</style>

<div class="card">

  <h3>{event_title}</h3>
  <div class="">

    <div class="">
      <div class="">
        <p>{event_date}</p>
        {short_story}
        {#if pokazOpis}
          <div class="szczegoly">
            <p>{long_story}</p>
            <p>
              Poniesione koszta:
              <strong>{koszta}</strong>
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
        <a href={doc_link} target="blank">
          <Button button_text="PDF" />
        </a>

      </div>
    </div>
  </div>

</div>
