import React, { Component } from "react";
import style from "./menu.module.css";
import { NavLink } from "react-router-dom";

class Menu extends Component {

  render() {
    return (
      <aside
        id="menu"
        className={style.menu_aside}
      >
        <button onClick={this.props.openMenu} className={style.menu_aside_close} />
        <nav className={style.menu_main}>
          <NavLink
            className={style.menu_main_link}
            to="/about"
            title="О нас"
            onClick={this.props.openMenu}
          >
            О нас
          </NavLink>
          <NavLink
            className={style.menu_main_link}
            to="/products"
            title="Наша продукция"
            onClick={this.props.openMenu}
          >
            Наша продукция
          </NavLink>
          <NavLink
            className={style.menu_main_link}
            to="/jay_advices"
            title="Советы от JAY"
            onClick={this.props.openMenu}
          >
            Советы от JAY
          </NavLink>
          <NavLink
            className={style.menu_main_link}
            to="/contacts"
            title="Контакты"
            onClick={this.props.openMenu}
          >
            Контакты
          </NavLink>
        </nav>
      </aside>
    );
  }
}

export default Menu;
