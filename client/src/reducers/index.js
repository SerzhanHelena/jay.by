import { combineReducers } from 'redux';
import { products } from './productsReducer';


export const rootReducer = combineReducers({
	products
});