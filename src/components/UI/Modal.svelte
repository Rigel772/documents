<script>
  import { createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();
  const close = () => {
    dispatch("close");
  };
  let modal;

  const handle_keydown = e => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused =
    typeof document !== "undefined" && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }

  console.log("Modal");
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.2em;
    background: white;
    /* overflow: auto;
    z-index: 1004;
    margin: auto;
    padding: 1em;
    width: 90%;
    background: white;
    transform: translate(-19%, -5%); */
  }

  button {
    display: block;
  }

  @media only screen and (min-width: 700px) {
    .modal-background {
      position: fixed;
      z-index: 1003;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.664);
    }

    .modal {
      position: absolute;
      z-index: 1004;
      left: 50%;
      top: 50%;
      width: calc(100vw - 4em);
      max-width: 32em;
      max-height: calc(100vh - 4em);
      overflow: auto;
      transform: translate(-50%, -50%);
      padding: 1em;
      border-radius: 0.2em;
      background: white;
    }

    button {
      display: block;
    }
  }
</style>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} />

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
  <slot name="top" />
  <hr />
  <slot name="middle" />
  <hr />
  <slot name="bottom">
    <button>helo</button>
  </slot>

</div>
