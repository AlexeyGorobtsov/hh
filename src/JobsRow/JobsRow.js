import React from 'react';

export class JobsRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const job = this.props.job;
        return (
            <tr>
                <td>{job.area.name}</td>
                <td>{job.name}</td>
                <td>{job.employer.name}</td>
                <td>{job.published_at}</td>
                <td>{job.snippet.requirement}</td>
            </tr>
        );
    }
}