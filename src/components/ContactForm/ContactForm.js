import React, { Component } from "react";
import { Input, Form, Button, Checkbox, Segment, Message } from "semantic-ui-react";
import axios from "axios";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import style from "./сontactForm.module.css";
import Skeleton from 'react-loading-skeleton';

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      lastName: "",
      phone: "",
      organization: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetForm = () => {
    document.getElementById('contact-form').reset();
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message, lastName, phone, organization } = this.state;

    const form = await axios.post("/contacts", {
      name,
      email,
      message,
      lastName,
      phone,
      organization
    })
  .then((response)=>{
    console.log(response)
    if (response === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    }else if(response.data.msg === 'fail'){
        alert("Message failed to send.")
    }
})
  }

  render() {
    const mapState = {
      center: [54.1, 28.36],
      zoom: 11
    };
    const placeMark = {
      geometry: [54.099191070504155, 28.359058999999984],
      properties: {
        hintContent: "Это хинт",
        iconContent: "ул. Спортивная, д.1, пом.43"
      },
      options: {
        preset: "islands#blackStretchyIcon"
      }
    };
    return (
      <section className={style.contacts_section}>
       <div className={style.map}>
         <YMaps>
            <Map
              instanceRef={ref => {
                ref && ref.behaviors.disable("scrollZoom");
              }}
              state={mapState}
              width={'100%'}
              height={'100%'}
            >
              <ZoomControl
                options={{
                  zoomDuration: 1000
                }}
              />
              <Placemark
                {...placeMark}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              />
            </Map>
          </YMaps>
          
        <Skeleton width={'100%'} height={'100%'}/></div>
        <div className={style.right_contact_block}>
          <div className={style.right_contact_block_title}>Связаться с нами</div>
          <div className={style.form_wrapper}>
            <form
              id="contact-form"
              onSubmit={this.handleSubmit}
              method="POST"
              className={style.contact_form}
            >
              <input
                placeholder="Имя"
                type="text"
                className="form_control"
                name="name"
                onChange={this.handleChange}
              />

              <input placeholder="Фамилия"
              type="text"
              className="form_control"
              name="lastName"
              onChange={this.handleChange} />

              <input placeholder="Организация"
              type="text"
              className="form_control"
              name="organization"
              onChange={this.handleChange} />

              <input
                type="email"
                className="form_control"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />

              <input placeholder="Телефон"
              type="tel"
              className="form_control"
              name="phone"
              onChange={this.handleChange} />

              <textarea
                className="form_control"
                rows="5"
                name="message"
                onChange={this.handleChange}
                placeholder='Сообщение'
              />

              <button className={style.submit_btn} type="submit"
              onClick={this.resetForm}
              >
                Отправить
              </button>
            </form>
          </div>
          <div className={style.requisites_block}>
            <h4 className={style.requisites_block_title}>Реквизиты</h4>
            <p>Республика Беларусь, 222162, г. Жодино, ул. Спортивная, д. 1</p>
            <p>УНП 691732968</p>
            <p>info@yay.by</p>
            <p>info@flt.by</p>
            <p>+375291820171</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
