import { loremIpsum } from "lorem-ipsum";

const lorem = new loremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});
// generate random inputs
let randomTitleWordsCount = Math.floor(Math.random() * 10) + 4;
let title = loremIpsum();

// let randomBriefWordsCount = Math.floor(Math.random() * 100) + 20;
// let brief = lorem.generateWords(15);

// let randomDescrWordsCount = Math.floor(Math.random() * 1000) + 100;
// let descr = lorem.generateWords(59);

let cost = Math.floor(Math.random() * 100) + 1;

export const random_event = {
    title: title,
    brief: '',
    descr: '',
    date: '',
    end_date: '',
    cost: cost,
    refund: '',
    tags: [],
    link: 'https://drive.google.com/file/d/1rFmveqM6_azs86SKMf2xLmHBnuRTVMsk/view?usp=sharing'
}