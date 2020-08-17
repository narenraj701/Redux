import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyChocolate } from '../redux';

function ChocolateContainer(props) {
    const noOfChocolates=useSelector(state=>state.chocolate.noOfChocolates)
    const dispatch=useDispatch();
    return (
        <div>
            <h1>used Hooks</h1>
            <h2>No of Chocolates Left {noOfChocolates}</h2>
            <button onClick={()=>dispatch(buyChocolate())}>Buy Chocolate</button>
        </div>
    );
}

export default ChocolateContainer;