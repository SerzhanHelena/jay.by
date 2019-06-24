import React, { Component } from "react";
import style from "./productItem.module.css";
import ProductModal from "../productModal/productModal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Card, Icon, Image } from "semantic-ui-react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  getProductById = idProduct => {
    return this.props.productsList.find(product => product.id === idProduct);
  };

  openModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  };

  render() {
    const productData = this.props.productData;

    return (
      <div>
                <div>
          <ReactCSSTransitionGroup
            transitionName="modalWindow"
            transitionAppear={true}
            transitionAppearTimeout={700}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={800}
          >
            {this.state.openModal && 
              <ProductModal
                productId={productData.id}
                isModalOpened={this.state.openModal}
                handleModal={this.openModal}
                productsList={this.props.productsList}
                getProductById={this.getProductById}
                key='1'
              />
            }
          </ReactCSSTransitionGroup>
        </div>
         <div  className={style.product_card}>
        <Card
         
          centered
          color="red"
          raised
          data-product={productData.id}
          onClick={this.openModal}
        >
          <div className={style.product_card_image}>
          <Image  src={productData.img} ui={false} />
          </div>

          <Card.Content>
            <Icon
              circular={true}
              bordered={true}
              color="grey"
              size="big"
              className={style.zoom_icon}
              name="zoom-in"
            />
            <Card.Header>{productData.title}</Card.Header>
          </Card.Content>
        </Card>
        </div>
      </div>
    );
  }
}

export default ProductItem;
