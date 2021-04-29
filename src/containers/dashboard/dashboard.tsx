import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

type DashboardProps = {
    data: string
}

export const Dashboard = (props: DashboardProps ) => {
    return (
        <div>
            <p>{props.data}</p>
        </div>
    )
}