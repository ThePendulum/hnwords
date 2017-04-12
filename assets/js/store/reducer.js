'use strict';

import defaultState from './state.js';

export default function(state = defaultState, action) {
    const handlers = {
        SET_TITLES: function(titles) {
            return Object.assign({}, state, {titles});
        },
        ADD_TITLES: function(titles) {
            return Object.assign({}, state, {
                titles: state.titles.concat(titles)
            });
        },
        CLEAR_TITLES: function() {
            return Object.assign({}, state, {
                titles: []
            });
        }
    };

    if(handlers[action.type]) {
        return handlers[action.type](action.payload);
    }

    return state;
};
