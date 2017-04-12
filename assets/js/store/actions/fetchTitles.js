'use strict';

import config from 'config';

export default function() {
    return function(dispatch, getState) {
        dispatch({
            type: 'SET_TITLES',
            payload: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Aliquam vehicula malesuada commodo', 'hellsellus sed est eget velit congue tincidunto', 'Ent finibus ante a aliquam vulputate']
        });

        return fetch(config.api.url + '/topstories.json').then(res => res.json()).then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
    };
};
