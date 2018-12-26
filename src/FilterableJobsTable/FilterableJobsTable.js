import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {JobsTable} from '../JobsTable/JobsTable';

export class FilterableJobsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText
        });
    }

    render() {
        return(
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <JobsTable
                    jobs={this.props.jobs}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}