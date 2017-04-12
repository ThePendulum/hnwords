'use strict'

export default function() {
    return fetch(config.api.url + '/topstories.json').then(res => res.json()).then(body => {
        console.log(body);
    }).catch(error => {
        console.log(error);
    });
};
