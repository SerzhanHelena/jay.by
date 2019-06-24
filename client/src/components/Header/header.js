import React, { Component } from "react";
import style from "./header.module.css";
import logo from "../../images/logo.svg";
import Menu from "../Menu/menu";
import { NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const logoImg = {
  backgroundImage: `url(${logo})`
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  openMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);

  // }

  handleScroll = e => {
    let header = document.getElementById("header");
    if (window.scrollY > 110) {
      header.style.background = "hsla(0,0%,93%,.8)";
    } else {
      header.style.background = "unset";
    }
  };
  render() {
    return (
      <header id="header">
        <div>
          <ReactCSSTransitionGroup
            transitionName="menu"
            transitionAppear={true}
            transitionAppearTimeout={700}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={800}
          >
            {this.state.showMenu && <Menu openMenu={this.openMenu} />}
          </ReactCSSTransitionGroup>
        </div>
        <div className={style.header_wrap}>
          <div className={style.header_menu_button}>
            <button onClick={this.openMenu} className={style.header_menu}>
              <span className={style.header_menu_ico} />
              <span className={style.header_menu_txt}>Меню</span>
            </button>
          </div>
          <div className={style.header_logo}>
            <NavLink
              style={logoImg}
              className={style.header_logo_link}
              to="/"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
