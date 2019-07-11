import React, { Component } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import style from "./сontactForm.module.css";
import Skeleton from "react-loading-skeleton";
import * as emailjs from "emailjs-com";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';



class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      lastName: "",
      phone: "",
      organization: "",
      errors: {
        name: "",
        email: "",
        message: "",
        lastName: "",
        phone: "",
        organization: ""
      },
      formEmail: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateMail = () => {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "Минимум 3 символа";
      formIsValid = false;
    }

    if (!this.state.lastName || this.state.lastName.length < 3) {
      errors.lastName = "Минимум 3 символа";
      formIsValid = false;
    }

    if (!this.state.email || this.state.email.length < 3) {
      errors.email = "Минимум 3 символа";
      formIsValid = false;
    }

    if (!this.state.organization || this.state.organization.length < 3) {
      errors.organization = "Минимум 3 символа";
      formIsValid = false;
    }

    if (!this.state.message || this.state.message.length < 3) {
      errors.message = "Минимум 3 символа";
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(this.state.email)) {
      errors.email = "This is not a valid email";
      formIsValid = false;
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  };

  sentMessage = e => {
    e.preventDefault();
    // if (!this.validateMail()) {
    //   return;
    // }
    // const dotenv = require("dotenv");
    // dotenv.config({ path: __dirname + "/.env" });

    let templateParams = {
      from_name:
        this.state.name + ' ' + this.state.lastName,
      to_name: "info@jay.by",
      phone: this.state.phone,
      organization: this.state.organization,
      email: this.state.email,
      message_html: this.state.message
    };

    emailjs
      .send(
        "gmail",
        'template_8VEY8xyr',
        templateParams,
        'user_pNMERBJY6sCshFnpgTQi9'
      )
      .then(
        response => {
          toastr.options = {
            positionClass : 'toast-top-full-width',
            hideDuration: 3000,
            timeOut: 3000
          }
          toastr.success(`Сообщение отправлено! Спасибо за обращение!`);
          console.log("Success!", response.status, response.text);
         
        },
        err => {
          // toastr.error(err);
          console.log(err);
        }
      );
  };

  resetForm = () => {
    document.getElementById("contact-form").reset();
  };

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
              width={"100%"}
              height={"100%"}
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

          <Skeleton width={"100%"} height={"100%"} />
        </div>
        <div className={style.right_contact_block}>
          <div className={style.right_contact_block_title}>
            Связаться с нами
          </div>
          <div className={style.form_wrapper}>
            <form
              id="contact-form"
              onSubmit={this.sentMessage}
              method="POST"
              className={style.contact_form}
            >
              <input
                placeholder="Имя"
                type="text"
                className="form_control"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                error={this.state.errors.name}
              />

              <input
                placeholder="Фамилия"
                type="text"
                className="form_control"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
                error={this.state.errors.lastName}
              />

              <input
                placeholder="Организация"
                type="text"
                className="form_control"
                name="organization"
                onChange={this.handleChange}
                value={this.state.organization}
                error={this.state.errors.organization}
              />

              <input
                type="email"
                className="form_control"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
                error={this.state.errors.email}
              />

              <input
                placeholder="Телефон"
                type="tel"
                className="form_control"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
                error={this.state.errors.phone}
              />

              <textarea
                className="form_control"
                rows="5"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                error={this.state.errors.message}
                placeholder="Сообщение"
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
