import React from 'react';
import { buyCake } from '../redux';
import {connect} from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h1>used Connect</h1>
            <h2>No of Cakes left in store {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps=state=>{
    return {
        noOfCakes:state.cake.noOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
