<script>
  import { db } from "../firebase";
  import EventCard from "./EventCard.svelte";

  let eventsList = [];

  // .where("tags", "array-contains", "tag4")
  db.collection("events")
    .orderBy("date", "asc")
    .onSnapshot(snapData => {
      eventsList = snapData.docs;
      console.log(eventsList);
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
    {#each eventsList as item}
      <li>
        <EventCard
          id={item.data().itemId}
          title={item.data().title}
          date={item.data().date}
          brief={item.data().brief}
          descr={item.data().descr}
          cost={item.data().cost}
          tags={item.data().tags}
          pdf={item.data().pdf} />
      </li>
    {/each}
  </ul>

</div>
