import List from './List';
import Dashboard from '../Layouts/Dashboard';

export default function index(props) {

    return (
        <Dashboard
            title="WhatApp Influencers"
        >
            <List data={props.influencers?.data} paginationData={props.influencers.meta} />
        </Dashboard>
    );
}
