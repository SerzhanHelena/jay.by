import React, { Component } from "react";
import ProductItem from "./ProductItem/ProductItem";
import style from "./productsPage.module.css";

class ProductsPage extends Component {
  product = this.props.products.map(product => (
    <ProductItem
      key={product.id}
      productData={product}
      productsList={this.props.products}
    />
  ));
  render() {
    return (
      <section
        style={{ background: "#fafafa" }}
        className={style.products_section}
      >
        <h1 className={style.products_section_title}>Наша продукция</h1>
        <div className={style.about_product_text}>
          Продукция ТМ JAY - не просто хлебцы, это философия здорового питания.
          Наша миссия - предложить родному для нас беларускому потребителю
          продукт, который не только вкусный, но и полезный. Именно поэтому в
          составе  нашей продукции мы используем
          исключительно полезные и натуральные ингредиенты, а наши технологии
          позволяют сохранить все природные витамины и минералы исходных ингредиентов   в 
          наших продуктах в полном объеме. Во всей нашей продукции нет глютена, сахара, дрожжей,
          муки, пищевых добавок, красителей и консервантов. Только цельное
          зерно, специи, морская соль и стевия.
        </div>
        <div className={style.catalog_block}>
          <div className={style.novelty_list}>{this.product}</div>
        </div>
      </section>
    );
  }
}

export default ProductsPage;
