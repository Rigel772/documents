<script>
  import { current_category, category_tags } from "../../store";
  import { db } from "../../firebase";
  //   import { afterUpdate } from "svelte";

  //   db.collection("categories").onSnapshot(snapshot => {
  //     categories = [];
  //     snapshot.docs.forEach(item => {
  //       categories = [...categories, item.data().name];
  //       // console.log(item.data().name);
  //       // console.log(categories);
  //       return categories;
  //     });
  //   });
  let tags = [];
  let tag = "";
  let document_tags;
  // const unsubscribe = current_category.subscribe();
  // document_tags = db
  //   .collection("categories")
  //   .doc($current_category)
  //   // .where("name", "==", $current_category)
  //   .get()
  //   .then(function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //       // doc.data() is never undefined for query doc snapshots
  //       // console.log(doc.id, " => ", doc.data());
  //       document_tags = doc.data().tags;
  //     });
  //   })

  // .catch(function(error) {
  //   console.log("Error getting documents: ", error);
  // });

  //   afterUpdate(() => {
  //     document_tags = db
  //       .collection("categories")
  //       .where("name", "==", $current_category)
  //       .get()
  //       .then(function(querySnapshot) {
  //         querySnapshot.forEach(function(doc) {
  //           // doc.data() is never undefined for query doc snapshots
  //           // console.log(doc.id, " => ", doc.data());
  //           document_tags = doc.data().tags;
  //         });
  //       })

  //       .catch(function(error) {
  //         console.log("Error getting documents: ", error);
  //       });
  //   });

  //   console.log(document);

  // .onSnapshot(snapshot => {
  //   tags = snapshot.doc().tags;
  // });
</script>

<style>
  .tag {
    display: inline;
    text-transform: uppercase;
    padding: 0.5em;
    font-weight: 700;
    font-size: 80%;
  }
</style>

<div class="wrapper">
  <p>Tagi dla kategorii {$current_category}:</p>
  {#each $category_tags as tag}
    <div class="tag">{tag}</div>
  {/each}
</div>
