<script>
  import Menu from "./components/UI/Menu.svelte";
  import Menu_addDoc from "./components/UI/Menu_addDoc.svelte";
  import Menu_zaloguj from "./components/UI/Menu_zaloguj.svelte";
  import ListEvents from "./components/ListEvents.svelte";
  import EditCategories from "./components/options/EditCategories.svelte";
  import FilterTags from "./components/options/FilterTags.svelte";
  import Users from "./components/Users.svelte";
  import ChooseCategory from "./components/ChooseCategory.svelte";
  import Login from "./components/Login.svelte";
  import { modals } from "./store";
  import Info from "./components/Info.svelte";
  import { auth } from "./firebase";

  function printPdf() {
    window.print();
  }

  let showListing = false;
  let showInfo = true;
  let showOptions = false;
  auth.onAuthStateChanged(function(user) {
    if (user) {
      showListing = true;
      showInfo = false;
      showOptions = true;
    } else {
      showListing = false;
      showInfo = true;
      showOptions = false;
    }
  });
  // console.log(user);
</script>

<style>
  /* **************** LAYOUT ****************** */

  /* .container {
    max-width: 80rem;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
      " header "
      " options "
      " content "
      " footer ";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    
  }
  @media only screen and (min-width: 700px) {
    .container {
      display: grid;
      grid-template-areas:
        " header header"
        " options content"
        " footer footer";
      grid-template-columns: min-content 3fr;
      grid-template-rows: auto 1fr 5rem;
      
    }

    .header {
      grid-area: header;
    }

    .options {
      grid-area: options;
      height: 100vh;
      min-width: 14em;
    }

    .content {
      grid-area: content;
    }

    .footer {
      grid-area: footer;
    }
  }
  
  @media print {
    :global(body) {
      height: auto !important;
      overflow: visible !important;
    }

    :global(.container) {
      overflow: visible !important;
    }
    :global(button, a) {
      display: none !important;
    }
    :global(.screen) {
      display: none;
    }
    :global(.print) {
      display: block;
    }
    :global(.section) {
      width: 100%;
      page-break-before: always;
    }
    :global(input, textarea) {
      border: none !important;
      padding: 0;
      resize: none;
      margin: 0;
    }
    :global(.project-item) {
      padding: 0 !important;
      margin: 0 !important;
    }
    :global(h2) {
      color: #ccc !important;
      margin-top: 5px;
      margin-bottom: 30px;
    }
    :global(.builder) {
      display: none;
    }
    :global(p, li, textarea) {
      line-height: 1.5 !important;
    }
    :global(.card) {
      box-shadow: none !important;
    }
    :global(.tags) {
      display: none !important;
    }
  }
  
  .container {
    padding: 0;
  }

  .header {
    color: whitesmoke;
    background-color: rgb(29, 29, 29);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgb(29, 29, 29);
    border-radius: 3px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  h1 {
    margin: 0;
    padding: 1em;
  }
  .footer {
    background-color: black;
    color: whitesmoke;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer button {
    margin: 0 1em;
  } */
</style>

<!-- <main class="container">

  <div class="header">
    <h1>Dokumenty</h1>
    <div id="menu">
      <Menu />
    </div>
  </div>
  {#if showOptions}
    <div class="options">
      <Options />
    </div>
  {/if}
  <div class="content">

    {#if $modals.login}
      <Login />
    {/if}

    {#if $modals.Users}
      <Users />
    {/if}

    {#if showInfo}
      <Info />
    {/if}

    {#if showListing}
      <div id="print-wrapper" class="listing">
        <ListEvents />
      </div>
    {/if}

  </div>

  <div class="footer">
    <button class="btn" on:click={printPdf}>Print</button>
    <p>Dziala tylko w Chrome, aby zapisac wybiez "do pliku pdf"</p>
  </div>
</main> -->
<div
  class="events-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer
  mdl-layout--fixed-header">
  <header
    class="events-header mdl-layout__header mdl-color--grey-100
    mdl-color-text--grey-600">
    <div class="mdl-layout__header-row">

      <span class="mdl-layout-title">Szuflada</span>

      <div class="mdl-layout-spacer" />

      <!-- <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">

        <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" id="search" />
          <label class="mdl-textfield__label" for="search">
            Enter your query...
          </label>
        </div>

      </div> -->
      <Menu_zaloguj />
      <button
        class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
        id="hdrbtn">
        <i class="material-icons">more_vert</i>
      </button>
      <!-- class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" -->
      <ul
        class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="hdrbtn">
        <li class="mdl-menu__item">About</li>
        <li class="mdl-menu__item">Contact</li>
        <li class="mdl-menu__item">Legal information</li>
      </ul>
    </div>
  </header>

  <div
    class="events-drawer mdl-layout__drawer mdl-color--blue-grey-900
    mdl-color-text--blue-grey-50">

    <header class="events-drawer-header">
      <ChooseCategory />

    </header>

    <nav class="events-navigation mdl-navigation mdl-color--blue-grey-800">

      <div class="options-title " href="#!">
        <i class=" material-icons" role="presentation">local_offer</i>
        Tagi
      </div>
      <FilterTags />

      <div class="options-title " href="#!">
        <i class=" material-icons" role="presentation">file_copy</i>
        Dodaj dokument
      </div>
      <Menu_addDoc />
      <div class="options-title " href="#!">
        <i class=" material-icons" role="presentation">inbox</i>
        Dodaj kategorie
      </div>
      <EditCategories />

      <div class="options-title">
        <i class=" material-icons" role="presentation">people</i>
        Użytkownicy
      </div>
      <p style="padding-left:1em">Do zrobienia...</p>
      <div class="options-title " href="#!">
        <i class=" material-icons" role="presentation">forum</i>
        Komentarze
      </div>
      <p style="padding-left:1em">Do zrobienia...</p>

      <div class="mdl-layout-spacer" />

      <a class="mdl-navigation__link" href="#!">
        <i
          class="mdl-color-text--blue-grey-400 material-icons"
          role="presentation">
          help_outline
        </i>
        Jak używać
        <!-- <span class="visuallyhidden">Help</span> -->
      </a>
    </nav>
  </div>

  <main class="mdl-layout__content mdl-color--grey-100">
    <div class="mdl-grid events-content">
      {#if showInfo}
        <Info />
      {/if}
      {#if showListing}
        <ListEvents />
      {/if}
      {#if $modals.login}
        <Login />
      {/if}

    </div>

  </main>

</div>
