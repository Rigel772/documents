<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { db } from "../firebase";
  import EventCard from "./EventCard.svelte";
  import {
    event_store,
    current_category,
    category_tags,
    selected_category_tags
  } from "../store.js";
  import {
    getCurrentCategory,
    getCategoryTags,
    saveCurrentCategory
    // getEvents
  } from "./Auth.svelte";

  let data = [];
  // let category;

  ////////////////////// get category from database and set store values
  onMount(() => {
    // category = get_current_category().then(xxx => console.log("tutaj", xxx));
    getCurrentCategory()
      .then(value => {
        $current_category = value;
        // console.log("1", value, $current_category);
      })
      .then(() => getCategoryTags($current_category))
      .then(value => {
        $category_tags = value;
        // console.log("2", value, $category_tags);
      })
      .then(() => {
        // console.log("3", $current_category, $category_tags);
        getEvents($current_category, $selected_category_tags);
      });
  });
  ////////////// tego nie da sie przeniesc do Auth bo jest wywolywana za wczesnie - zanim w Choose kategory ustwiony jest nowy $category_tags
  function getEvents(category, tags) {
    db.collection(category)
      .where("tags", "array-contains-any", tags)
      .orderBy("date", "asc")
      .get()
      .then(
        snapshot => {
          // console.log("current category do firebase", $current_category);
          // console.log("category tags do firebase", $category_tags);
          // console.log(snapshot.docs());
          data = [];
          snapshot.docs.forEach(doc => (data = [...data, doc.data()]));
          // console.log("pierwsza", data);
          return data;
        },
        function(error) {
          console.log(error);
        }
      )
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
  /////////////////////// generata 'data' each time category changes
  const unsubscribe = current_category.subscribe(value => {
    // console.log(
    //   "zadzialalo - category ",
    //   $current_category,
    //   "category tags ",
    //   $category_tags
    // );
    getEvents(value, $category_tags);
  });
  onDestroy(unsubscribe);

  // $: console.log("from list events", $current_category);
</script>

<style>
  .list-events {
    margin: 1em;
  }
  ul {
    padding: 0;
  }
</style>

<!-- {@debug eventsList} -->
<div class="list-events">
  <ul>
    {#each data as item}
      <li>
        <EventCard
          docID={item.id}
          title={item.title}
          date={item.date}
          end_date={item.end_date}
          brief={item.brief}
          descr={item.descr}
          cost={item.cost}
          refund={item.refund}
          tags={item.tags}
          link={item.link} />
      </li>
    {/each}
  </ul>

</div>
