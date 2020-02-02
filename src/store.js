import { writable } from 'svelte/store';

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

export const display_category = writable('AZE')

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