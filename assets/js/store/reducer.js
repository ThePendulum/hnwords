'use strict';

import defaultState from './state.js';

export default function(state = defaultState, action) {
    const handlers = {
        SET_TITLES: function(titles) {
            state.titles = titles;

            return titles;
        },
        ADD_TITLES: function(titles) {
            return state.concat(titles);
        },
        CLEAR_TITLES: function() {
            state.titles = [];

            return state;
        }
    };

    if(handlers[action.type]) {
        return handlers[action.type](action.payload);
    }

    return state;
};
