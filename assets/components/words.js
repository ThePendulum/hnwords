'use strict';

import React from 'react';
import {connect} from 'react-redux';

import count from '../js/count.js';
import fetchTitles from '../js/store/actions/fetchTitles.js';

class Words extends React.Component {
    constructor(props) {
        super(props);

        this.refresh = this.refresh.bind(this);

        this.state = {
            fetching: false
        };
    }

    refresh(event) {
        this.state.fetching = true;
        this.setState(this.state);

        this.props.dispatch(fetchTitles()).then(result => {
            this.state.fetching = false;
            this.setState(this.state);
        });
    }

    render() {
        let refresh;

        if(this.state.fetching) {
            refresh = <span>fetching...</span>
        } else {
            refresh = <button onClick={this.refresh}>Refresh</button>;
        };

        return (
            <div>
                Top 10 word occurrences from
                <select>
                    <option>last 600 stories</option>
                    <option>last week</option>
                    <option>last 60 stories from 10k karma users</option>
                </select>

                {refresh}

                <h2>Top 10</h2>
                <ul>{count(this.props.titles.join(' ')).slice(0, 10).map((word, index) => <li key={index}>{word}</li>)}</ul>

                <h2>Titles</h2>
                <ul>{this.props.titles.map((title, index) => <li key={index}>{title}</li>)}</ul>
            </div>
        );
    }
};

const select = function(state) {
    return {
        titles: state.titles
    };
};

export default connect(select)(Words);
