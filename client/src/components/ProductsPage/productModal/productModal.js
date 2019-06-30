import React, { Component } from "react";
import { Header, Image, Modal, Icon, Button, Table } from "semantic-ui-react";
import styles from "./productModal.module.css";


class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideId: this.props.productId,
      productInfo: this.props.getProductById(this.props.productId)
    };
  }

  renderArrows() {
    return (
      <div className={styles.arrows_btns}>
        <Button
          data-direction="prev"
          color="red"
          onClick={this.handleProductsModal}
        >
          <Icon name="angle left" />
        </Button>
        <Button
          data-direction="next"
          color="red"
          onClick={this.handleProductsModal}
        >
          <Icon name="angle right" />
        </Button>
      </div>
    );
  }


  handleProductsModal = e => {
    if (e.currentTarget.dataset.direction === "next") {
      if (this.state.currentSlideId === this.props.productsList.length) {
        this.state.currentSlideId = 1;
        //  this.setState({currentSlideId: 1})
      } else {
        /// this.setState({currentSlideId: this.state.currentSlideId++})
        this.state.currentSlideId++;
      }
    } else {
      if (this.state.currentSlideId === 1) {
        this.state.currentSlideId = this.props.productsList.length;
        // this.setState({currentSlideId: this.props.productsList.length})
      } else {
        // this.setState({currentSlideId: this.state.currentSlideId--})
        this.state.currentSlideId--;
      }
    }
    this.setState({
      productInfo: this.props.getProductById(this.state.currentSlideId)
    });
  };

  renderSlides() {
    return (
      // <div  className={styles.modal_wrapper} style={this.setSliderStyles()}>
      <Modal
        closeIcon
        open={true}
        onClose={this.props.handleModal}
        size='large'
      >
        <Modal.Header>
          {this.state.productInfo.title}
        </Modal.Header>

        <Modal.Content>
          <Image wrapped centered  src={this.state.productInfo.img} />
         
          <Modal.Description >
            
            {/* <div className={styles.product_description}>{this.state.productInfo.description}</div> */}
            <div className={styles.product_composition}>Состав: {this.state.productInfo.composition}</div>
            <div className={styles.nutritional_value_block}>
              Пишевая ценность в 100г продукта:
              <Table celled collapsing>

    <Table.Body>
      <Table.Row active>
        <Table.Cell >Белки</Table.Cell>
        <Table.Cell> {this.state.productInfo.nutritionalValue.proteins}г</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Жиры</Table.Cell>
        <Table.Cell> {this.state.productInfo.nutritionalValue.fats}г</Table.Cell>
        
      </Table.Row>
      <Table.Row active>
        <Table.Cell>Углеводы</Table.Cell>
        <Table.Cell>{this.state.productInfo.nutritionalValue.carbohydrates}г</Table.Cell>
        
      </Table.Row>
      <Table.Row >
        <Table.Cell>Энергетическая ценность</Table.Cell>
        <Table.Cell>{this.state.productInfo.nutritionalValue.energyValue.calories}ккал/{this.state.productInfo.nutritionalValue.energyValue.energy}кДж</Table.Cell>
        
      </Table.Row>
    </Table.Body>
  </Table>

            </div>
            <div className={styles.weight_expirationDate_info}>
              <p>Масса нетто: {this.state.productInfo.weight}г</p>
              <p>Срок годности: {this.state.productInfo.expirationDate} месяцев</p>
            </div>
          </Modal.Description>
          </Modal.Content>
       <Modal.Actions> {this.renderArrows()}</Modal.Actions>
      </Modal>
    );
  }

  render() {
    return (
     
        <div>{this.renderSlides()}</div>
      
    );
  }
}

export default ProductModal;
