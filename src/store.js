import { writable } from 'svelte/store';
import { db } from './firebase'

// export const showModalAddUser = writable(false);
export const showModalUsers = writable(false);
export const showModalAddEvent = writable(false);
export const showModalLogin = writable(false);
export const showModalEditEvent = writable(false);

export const modals = writable({
    login: false,
    addUser: false,
    addEvent: false,
    editEvent: false
})
// data model as template
export const events = writable([{
    title: '',
    date: '',
    brief: '',
    descr: '',
    date: '',
    end_date: '',
    cost: '',
    refund: '',
    tags: [],
    link: 'https://drive.google.com/file/d/1rFmveqM6_azs86SKMf2xLmHBnuRTVMsk/view?usp=sharing'

}])



export const event_store = writable([{
    id: "",
    title: "",
    date: "",
    brief: "",
    descr: "",
    date: "",
    end_date: "",
    cost: "",
    refund: "",
    tags: [],
    link: ""

}])

export let current_category = writable("Kolano")
// export let current_category = writable("Kolano", async set => {

//     let docRef = db.collection("current").doc("category");
//     let snapshot = await docRef.get();
//     current_category = await (snapshot.data().name)
//     // await (snapshot => current_category = snapshot.doc.data().name);
//     // current_category = await ((doc) => console.log("tutaj", doc.data().name))
//     set(current_category);
//     console.log('zadzialalo', current_category)

//     // return () => {
//     //     // Called when subscriber count goes to 0.
//     //     console.log("No such document!");
//     // };
// });

export const category_tags = writable(["krakow"]);
// export let category_tags = writable(['default'], async set => {

//     let docRef = db.collection("current").doc("category");
//     let snapshot = await docRef.get();
//     // category_tags = await (snapshot => snapshot.docs.forEach(doc => category_tags = [...category_tags, data().tags]));
//     category_tags = await (snapshot.data().tags);
//     // current_category = await ((doc) => console.log("tutaj", doc.data().name))
//     set(category_tags);
//     console.log('zadzialalo', category_tags)

//     // return () => {

//     //     console.log("No such document!");
//     // };
// });

export const selected_category_tags = writable(['mama'])

export const filter_tags = writable([
    'faktura',
    'email',
    'decyzja',
    'badanie',
    'paragon',
    'ksiegowy',
    'komornik',
    'swieta',
    'mama',
    'krakow'
])



export const categories = writable([
    'AZE',
    'Kolano',
    'Personalne',
    'Regatta'
])

export const tags = [
    'faktura',
    'email',
    'decyzja',
    'badanie',
    'paragon',
    'ksiegowy',
    'komornik',
    'swieta',
    'mama',
    'krakow'

]