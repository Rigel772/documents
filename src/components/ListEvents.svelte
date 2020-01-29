<script>
  import { onDestroy } from "svelte";
  import { db } from "../firebase";
  import EventCard from "./EventCard.svelte";
  import { event_store, filter_tags, display_category } from "../store.js";

  let eventsList = [];
  // array-contains-any

  const getData = () => {
    db.collection($display_category)
      .where("tags", "array-contains-any", $filter_tags)
      .orderBy("date", "asc")
      .onSnapshot(
        snapData => {
          eventsList = snapData.docs;
          console.log(eventsList);
        },
        function(error) {
          console.log(error);
        }
      );
  };

  // getData();

  const unsubscribe = filter_tags.subscribe(getData);

  onDestroy(unsubscribe);
  const unsubscribe_categ = display_category.subscribe(getData);

  onDestroy(unsubscribe_categ);
</script>

<style>
  .list-events {
    margin: 1em;
  }
  ul {
    padding: 0;
  }
</style>

<div class="list-events">
  <ul>
    {#each eventsList as item}
      <li>
        <EventCard
          docID={item.id}
          title={item.data().title}
          date={item.data().date}
          end_date={item.data().end_date}
          brief={item.data().brief}
          descr={item.data().descr}
          cost={item.data().cost}
          refund={item.data().refund}
          tags={item.data().tags}
          link={item.data().link} />
      </li>
    {/each}
  </ul>

</div>
