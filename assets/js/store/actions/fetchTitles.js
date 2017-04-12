'use strict';

import config from 'config';

export default function() {
    return function(dispatch, getState) {
        dispatch({
            type: 'SET_TITLES',
            payload: ['foo', 'bar', 'hello', 'world']
        });

        return fetch(config.api.url + '/topstories.json').then(res => res.json()).then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
    };
};
