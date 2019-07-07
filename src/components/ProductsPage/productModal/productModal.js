import React, { Component } from "react";
import { Header, Image, Modal, Icon, Button, Table } from "semantic-ui-react";
import styles from "./productModal.module.css";
import bezgmo from '../../../images/badges/bez_gmo.png';
import vegan from '../../../images/badges/vegan.png';
import fitness from '../../../images/badges/fitness.png';
import bezDroz from '../../../images/badges/bez_drozhzhey.png';
import tselnozernye from '../../../images/badges/tselnozernye.png';


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
            <div className={styles.product_info_block}>
            <div className={styles.product_composition}><span className={styles.product_info_block_titles}>Состав: </span> {this.state.productInfo.composition}</div>
            <div className={styles.weight_expirationDate_info}>
              <p><span className={styles.product_info_block_titles}>Масса нетто: </span> {this.state.productInfo.weight}г</p>
              <p><span className={styles.product_info_block_titles}>Срок годности: </span> {this.state.productInfo.expirationDate} месяцев</p>
            </div>
            <div className={styles.badges}>
            <img className={styles.badges_img} src={bezgmo}/>
            <img className={styles.badges_img} src={bezDroz}/>
            <img className={styles.badges_img} src={vegan}/>
            <img className={styles.badges_img} src={tselnozernye}/>
            <img className={styles.badges_img} src={fitness}/>
         </div>
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
