import { combineReducers } from 'redux';
import stockReducer from './stock_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  stocks: stockReducer,
  user: userReducer
});

export default rootReducer;
