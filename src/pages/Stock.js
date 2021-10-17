import React from 'react';
import stocks from '../data.json';
import { useParams } from 'react-router';
// ^helps us target symbol

const Stock = (props) => {

    //// grab stock symbol from data
    // const symbol = props.match.params.symbol;

    // const { Symbol } = useParams();

    const stock = props.stocks.filter(stocks => stocks.symbol === props.match.params.symbol)[0] 
    // filter the info and find matching one in the array and setting it equal to the symbol that it matches to
    console.log(stocks)


    // const [stock, setStock] = React.useState(null);

    // const getStock = (event) => {
    //    getStock({...stock});

    // }x

    // const getStock = async () => {
    //     const response = await fetch (symbol);
    //     const data = await response.json();
    //     setStock(data);
    // }
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