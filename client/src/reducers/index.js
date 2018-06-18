import { combineReducers } from 'redux';
import stockReducer from './stock_reducer';

const rootReducer = combineReducers({
  stocks: stockReducer
});

export default rootReducer;
