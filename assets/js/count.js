'use strict';

export default function(text) {
    const words = text.split(' ');

    const counts = words.reduce((acc, word) => {
        acc[word] = acc[word] ? acc[word] + 1 : 1;

        return acc;
    }, {});

    return Object.keys(counts).sort((wordA, wordB) => {
        if(counts[wordA] < counts[wordB]) {
            return 1;
        }

        if(counts[wordA] > counts[wordB]) {
            return -1;
        }

        return 0;
    });
};
