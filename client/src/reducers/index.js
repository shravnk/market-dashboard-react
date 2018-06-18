import { combineReducers } from 'redux';
import stockReducer from './stock_reducer';

const rootReducer = combineReducers({
  stock: stockReducer
});

export default rootReducer;
