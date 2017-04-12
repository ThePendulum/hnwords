'use strict';

import React from 'react';

export default class Words extends React.Component {
    constructor(props) {
        super(props);

        this.refresh = this.refresh.bind(this);
    }

    refresh(event) {
        console.log('pseudo refreshing');
    }

    render() {
        return (
            <div>
                Top 10 word occurrences from
                <select>
                    <option>last 600 stories</option>
                    <option>last week</option>
                    <option>last 60 stories from 10k karma users</option>
                </select>

                <button onClick={this.refresh}>Refresh</button>
            </div>
        );
    }
};
