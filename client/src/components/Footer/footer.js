import React, { Component } from 'react';
import style from './footer.module.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer>
            <div className={style.container}>
                <div className={style.contacts}>
                    <p className={style.contacts_email}>info@flt.by</p>
                    <p className={style.contacts_phone}>+375 29 182 01 71</p>
                    <p className={style.contacts_address}>г.Жодино, ул. Спортивная, д.1 каб.43</p>
                </div>
                {/* <div className={style.question_block}>
                    <div className={style.question_block_title}>
                        <span className={style.question_title}>Помогите сделать нашу продукцию лучше</span>
                    </div>

                    <p><a href="#c"><span className={style.question}>Какой новый вкус Вы хотели бы попробовать?</span></a></p>
                </div> */}
            </div>
            <div className={style.copy_box}>
                    <p className={style.copy_box_text}>© 2019 ООО «ФудЛайкТрейд»</p>
                    <a href="https://www.linkedin.com/in/elena-serzhan/" className={style.copy_box_link}>Разработка сайта Serzhan Elena</a>
            </div>
        </footer>
         );
    }
}
 
export default Footer;
