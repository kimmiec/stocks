import React from 'react';
import {Link} from 'react-router-dom';
import stocks from '../data.json';

const Dashboard = (props) => {

    return (
        <div className="stocks">
            <h1>ALL STOCKS</h1>
            {stocks.map((monie) => {
                const { name, symbol } = monie;

                return (
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Dashboard;