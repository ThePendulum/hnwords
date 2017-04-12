'use strict';

import '../css/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import actions from './store/actions';
import reducer from './store/reducer.js';

const store = createStore(reducer, {}, compose(applyMiddleware(thunk)));

import Words from '../components/words.js';

ReactDOM.render(
    <Provider store={store}>
        <Words />
    </Provider>,
    document.querySelector('#words')
);

store.dispatch(actions.fetchTitles());
