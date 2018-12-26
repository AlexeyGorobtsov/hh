import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {JobsTable} from '../JobsTable/JobsTable';

export class FilterableJobsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <SearchBar/>
                <JobsTable jobs={this.props.jobs}/>
            </div>
        );
    }
}