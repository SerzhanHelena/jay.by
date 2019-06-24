import React, { Component } from "react";
import ProductItem from "./ProductItem/ProductItem";
import style from "./productsPage.module.css";

class ProductsPage extends Component {
  
  product = this.props.products.map(product => (
      <ProductItem key={product.id} productData={product} productsList={this.props.products} />
    
  ));
  render() {
    
    return (
      <section className={style.products_section}>
         <h1>Продукция</h1>

        <div className={style.catalog_block}>
         
        <div className={style.novelty_list}>
          {this.product}
        </div>
        </div>

      </section>
    );
  }
}

export default ProductsPage;
