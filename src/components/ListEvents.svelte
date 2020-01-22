<script>
  import { db } from "../firebase";
  import EventCard from "./EventCard.svelte";

  let arrList = [];

  // .where("tags", "array-contains", "tag4")
  db.collection("event")
    .orderBy("date", "asc")
    .onSnapshot(snapData => {
      arrList = snapData.docs;
    });

  function deleteItem(itemId) {
    db.collection("event")
      .doc(itemId)
      .delete();
  }
</script>

<style>
  ul {
    padding: 0;
  }
</style>

<div class="list-events">
  <ul>
    {#each arrList as item}
      <li>
        <EventCard
          event_title={item.data().title}
          event_date={item.data().date}
          short_story={item.data().short_story}
          long_story={item.data().long_story}
          koszta={item.data().koszta}
          tags={item.data().tags}
          doc_link={item.data().doc_link} />
      </li>
    {/each}
  </ul>

</div>
