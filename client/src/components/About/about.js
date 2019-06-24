import React, { Component } from "react";
import style from "./about.module.css";

class About extends Component {
  state = {};
  render() {
    return (
      <section className={style.about_wrapper}>
        <h1>О нас</h1>
        <div className={style.about_us_block}>
          <div className={style.about_us_text}>
            Команда ООО «ФудЛайкТрейд» занимается производством цельнозерновых
            взорванных хлебцев по технологии и на высокотехнологичном
            оборудовании из Южной Кореи. В производстве мы используем только
            лучшее из отборного сырья. В первую очередь мы ориентированы на
            родной для нас беларуский рынок.
            <div className={style.about_us_for_customer}><span className={style.about_titles}>Нашим дорогим покупателям:</span> Мы любим нашу страну, и людей,
            которые в ней живут, поэтому мы ставим своей целью дать самый
            качественный, полезный и безвредный продукт которым мы сможем
            гордиться! Именно поэтому наш продукт прошёл сертификацию и
            регистрацию на территории Республики Беларусь, НЕ СОДЕРЖИТ ГЛЮТЕН
            (важно людям с непереносимостью глютена), НЕ СОДЕРЖИТ ГМО
            (безвредность ГМО на 100% не доказана), НЕ СОДЕРЖИТ САХАРА(вместо
            сахара мы используем экстракт стевии( 100% натуральный растительный
            продукт с 0%-й калорийностью), сделан из цельного зерна
            (способствует пищеварению и полезен для сердечно сосудистой
            системы), НИЗКОКАЛОРИЙНЫЕ, КОРОТКАЯ ТЕРМИЧЕСКАЯ ОБРАБОТКА 3-5 СЕКУНД
            (что возможно только при минимальной толщине хлебца, это позволяет
            сохранить все полезные минералы и витамины находящиеся в сыром зерне
            и специях). Мы гордимся тем, что смогли сделать действительно
            полезный продукт вкусным! Связаться с нами: Тел. +375 29 182-01-71.
            Емейл. Info@jay.by 
            </div>
            <div className={style.about_us_for_partner}>
           <span className={style.about_titles}> Нашим уважаемым партнёрам:</span> Имея значительный
            опыт в дистрибуции товаров, мы прекрасно понимаем насколько важен
            для дистрибьютера и ретейлера профессиональный подход и поддержка
            товара от производителя. Именно поэтому мы уверены, что сможем найти
            с Вами общий интерес! Если Вас заинтересовал наш продукт, то мы с
            большим удовольствием готовы обсудить условия сотрудничества!
            Связаться с нами: Тел. +375 29 182-01-71. Емейл. office@flt.b
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
