import React from 'react';
import {JobsTable} from "./JobsTable/JobsTable";
import {FilterableJobsTable} from "./FilterableJobsTable/FilterableJobsTable";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://api.hh.ru/vacancies')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded} = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="App">
                    <FilterableJobsTable jobs={this.state.items.items} />
                </div>
            );
        }
    }
}

export default App;
