<script>
  import { writable } from "svelte/store";
  const person = writable({ name: "Mark", zip: 63304 });

  function handleChange(event) {
    const name = event.target.value;
    person.set({ ...$person, name });
  }
</script>

<input on:input={handleChange} value={$person.name} />

<div>Hello, {$person.name} at {$person.zip}!</div>
