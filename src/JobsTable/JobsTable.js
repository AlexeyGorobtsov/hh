import React from 'react';
import {JobsRow} from '../JobsRow/JobsRow';

export class JobsTable extends React.Component {

    render() {
        const rows= [];
        const data = [];
        const filterText = this.props.filterText;
        this.props.jobs.forEach(job => {
            data.push({
                id: job.id,
                areaName: job.area.name,
                name: job.name,
                employerName: job.employerName,
                published_at: job.published_at,
                snippetRequirement: job.snippet.requirement,
            });
        });
        data.forEach((item, index) => {
            if(Object.values(item).join('').indexOf(filterText) === -1) {
                return;
            }
            rows.push(<JobsRow
                key={item.id}
                job={item}
                count = {++index}
            />);
        });
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
                    {rows}
                </tbody>
            </table>
        );
    }
}