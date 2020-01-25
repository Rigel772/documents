import { writable } from 'svelte/store';

export const showModalAddUser = writable(false);
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
    pdf: 'https://drive.google.com/file/d/1rFmveqM6_azs86SKMf2xLmHBnuRTVMsk/view?usp=sharing'

}])

export const categories = [
    'AZE',
    'Kolano',
    'Personalne',
    'Regatta'
]

export const tags = [
    'faktura',
    'email',
    'decyzja',
    'badanie'
]