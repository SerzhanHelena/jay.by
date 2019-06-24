import React from 'react';
import {connect} from 'react-redux';
import ProductsPage from '../components/ProductsPage/productsPage';

const ProductsContainer = (props) => {
	return (
		<ProductsPage  {...props} />
	)
};

const mapStateToProps = state => {
	return {
		products: state.products
	}
}



export default connect(mapStateToProps, null)(ProductsContainer);