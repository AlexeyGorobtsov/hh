import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            jobs: []
        }
    }

    componentDidMount() {
        fetch('https://api.hh.ru/vacancies')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        jobs: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, jobs } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            console.log(jobs)
        }

        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
