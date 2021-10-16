import React, { Link } from 'react';
import stocks from '../data.json';

const Dashboard = () => {

    return (
        <div className="stocks">
            <h1>ALL STOCKS</h1>
            {stocks.map((monie) => {
                const { name} = monie;

                return (
                    <Link to={'/stocks'}>
                        <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Dashboard;