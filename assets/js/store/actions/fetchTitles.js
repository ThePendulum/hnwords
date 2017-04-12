'use strict';

import config from 'config';
import titles from '../../mockTitles.js';

export default function() {
    return function(dispatch, getState) {
        dispatch({
            type: 'SET_TITLES',
            payload: titles
        });

        /*
        return fetch(config.api.url + '/topstories.json').then(res => res.json()).then(body => {
            console.log(body);
        }).catch(error => {
            console.log(error);
        });
        */
    };
};
