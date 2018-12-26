import React from 'react';

export class JobsRow extends React.Component {

    render() {
        const job = this.props.job;
        return (
            <tr>
                <td>{this.props.count}</td>
                <td>{job.areaName}</td>
                <td>{job.name}</td>
                <td>{job.employerName}</td>
                <td>{new Intl.DateTimeFormat('ru-Ru').format(new Date(job.published_at))}</td>
                <td>{job.snippetRequirement}</td>
            </tr>
        );
    }
}