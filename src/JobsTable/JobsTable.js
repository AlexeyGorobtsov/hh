import React from 'react';
import {JobsRow} from '../JobsRow/JobsRow';

export class JobsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rows= [];
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Город</th>
                        <th>Компания</th>
                        <th>Должность</th>
                        <th>Опубликовано</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.jobs.forEach((job) => {
                        rows.push(<JobsRow
                            key={job.id}
                            job={job}
                        />);
                    })}
                    {rows}
                </tbody>
            </table>
        );
    }
}