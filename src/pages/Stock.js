import React from 'react';
import stocks from '../data.json';

const Stock = (props) => {
    // grab stock symbol from data
    const symbol = props.match.params;

    const [stock, setStock] = React.useState(null);

    // const getStock = (event) => {
    //    getStock({...stock});
       
    // }

    const getStock = async () => {
        const response = await fetch (symbol);
        const data = await response.json();
        setStock(data);
    }
        const loaded = () => {
            return (
                <div>
                    <h1>Name: {stock.name}</h1>
                    <h2>Symbol: {stock.symbol}</h2>
                    <h2>Price: {stock.lastPrice}</h2>
                </div>
            )
        };

        const loading = () => {
            return <h1>Loading...</h1>
        };

        return stock ? loaded() : loading();
}

export default Stock;