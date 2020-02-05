import { writable } from 'svelte/store';
// import { db } from './firebase'
// import {
//     title,
// brief,
// descr,
//     cost
// } from './helpers.js';

// export const showModalAddUser = writable(false);
export const showModalUsers = writable(false);
export const showModalAddEvent = writable(false);
export const showModalLogin = writable(false);
export const showModalEditEvent = writable(false);


export const categories = writable([]);

export const modals = writable({
    login: false,
    addUser: false,
    addEvent: false,
    editEvent: false
})

// data model as template
export const event = writable([{
    title: '',
    brief: '',
    descr: '',
    date: '',
    end_date: '',
    cost: '',
    refund: '',
    tags: [],
    link: 'https://drive.google.com/file/d/1rFmveqM6_azs86SKMf2xLmHBnuRTVMsk/view?usp=sharing'
}])

export const current_event_store = writable({
    // id: "",
    // title: "",
    // date: "",
    // brief: "",
    // descr: "",
    // date: "",
    // end_date: "",
    // cost: "",
    // refund: "",
    // tags: [],
    // link: ""
})

export let current_category = writable("Kolano")

export const category_tags = writable(["krakow"]);

export const selected_category_tags = writable([])



export const tags = []