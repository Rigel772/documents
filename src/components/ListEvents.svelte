<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { db } from "../firebase";
  import { modals } from "../store";
  import AddEvent from "./AddEvent.svelte";

  import EventCard from "./EventCard.svelte";
  import {
    // event_store,
    current_category,
    category_tags,
    selected_category_tags
  } from "../store.js";
  import {
    getCurrentCategory,
    getCategoryTags,
    saveCurrentCategory
    // getEvents
  } from "./auth.js";

  let data = [];
  // let category;
  let current_event = {};

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
    // console.log("here", tags);
    if (tags.length == 0) {
      // console.log("empty");
      db.collection(category)
        // .where("tags", "array-contains-any", tags)
        .orderBy("date", "asc")
        // .get()
        .onSnapshot(
          snapshot => {
            data = [];
            snapshot.docs.forEach(doc => {
              let object_fields = doc.data();
              let full_object = { ...object_fields, id: doc.id };
              // console.log(doc.data());
              data.push(full_object);
              // data = [...data, doc.data()];
              // data = { ...doc.data(), id: doc.id };
              // console.log("category: ", category);
              // console.log("listing with no tags: ", data);
              // console.log(tags);
            });

            return data;
          },
          function(error) {
            console.log(error);
          }
        );
      // .catch(function(error) {
      //   console.log("Error getting document:", error);
      // });
    } else {
      // console.log("cos ma");
      db.collection(category)
        .where("tags", "array-contains-any", tags)
        .orderBy("date", "asc")
        // .get()
        .onSnapshot(
          snapshot => {
            data = [];
            snapshot.docs.forEach(doc => {
              let object_fields = doc.data();
              let full_object = { ...object_fields, id: doc.id };
              // console.log(doc.data());
              data.push(full_object);
              // data = [...data, doc.data()];
              // console.log(full_object);
              // data = { ...doc.data(), id: doc.id };
              // console.log("category: ", category);
              // console.log("Listing for selected tags: ", data);
              // console.log("selected tags: ", tags);
            });

            return data;
          },
          function(error) {
            console.log(error);
          }
        );
      // .catch(function(error) {
      //   console.log("Error getting document:", error);
      // });
    }
  }

  /////////////////////// generata 'data' each time category changes
  const unsubscribe = current_category.subscribe(value => {
    getEvents(value, $category_tags);
    console.log("UPDATE for new category", $current_category);
  });
  onDestroy(unsubscribe);
  const unsubscribe1 = selected_category_tags.subscribe(value => {
    getEvents($current_category, value);
    console.log("Listing for NEW category tags", $category_tags);
  });
  onDestroy(unsubscribe1);

  // $: console.log("ListEvents: curent-category: ", $current_category);

  // $: console.log("ListEvents: selected-category-tags", $selected_category_tags);
  // console.dir(data);

  // docID={item.id}
  //         title={item.title}
  //         date={item.date}
  //         end_date={item.end_date}
  //         brief={item.brief}
  //         descr={item.descr}
  //         cost={item.cost}
  //         refund={item.refund}
  //         tags={item.tags}
  //         link={item.link}
</script>

<style>
  /* .list-events {
    margin: 1em;
  }
  ul {
    padding: 0;
  } */
  li {
    display: block;
  }
</style>

{#if $modals.addEvent}
  <AddEvent />
{/if}

<!-- {@debug eventsList} -->
<div class="list-events">
  <ul>
    {#each data as item}
      <li>
        <EventCard {item} />
      </li>
    {/each}
  </ul>

</div>
