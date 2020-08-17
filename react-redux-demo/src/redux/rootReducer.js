import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import chocolateReducer from './chocolates/chocolateReducer';

const rootReducer=combineReducers({
    cake:cakeReducer,
    chocolate:chocolateReducer
})

export default rootReducer;