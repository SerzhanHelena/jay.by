import React, { Component } from "react";
import style from "./about.module.css";

class About extends Component {
  state = {};
  render() {
    return (
      <section className={style.about_wrapper}>
        <h1>О нас</h1>
        <div className={style.about_us_text}>
          <p>
            Команда ООО «ФудЛайкТрейд» занимается производством цельнозерновых
            взорванных хлебцев по технологии и на высокотехнологичном
            оборудовании из Южной Кореи. В производстве мы используем только
            лучшее из отборного сырья. В первую очередь мы ориентированы на
            родной для нас беларуский рынок.
          </p>
        </div>
        <div className={style.about_us_for_customer}>
          <h2 className={style.about_titles}>Нашим дорогим покупателям:</h2>
          <p>
            {" "}
            Мы любим нашу страну и людей, которые в ней живут, поэтому мы ставим
            своей целью дать самый качественный, полезный и безвредный продукт,
            которым мы сможем гордиться! Именно поэтому наш продукт:
          </p>
          <ul className={style.advantages_items}>
            <li>
              {" "}
              прошел сертификацию и регистрацию на территории Республики
              Беларусь;
            </li>
            <li>
              {" "}
              НЕ СОДЕРЖИТ ГЛЮТЕН (важно людям с непереносимостью глютена);
            </li>
            <li>НЕ СОДЕРЖИТ ГМО (безвредность ГМО на 100% не доказана);</li>
            <li>
              НЕ СОДЕРЖИТ САХАРА(вместо сахара мы используем экстракт
              стевии(100% натуральный растительный продукт с 0%-й
              калорийностью));
            </li>
            <li>
              сделан из цельного зерна (способствует пищеварению и полезен для
              сердечно-сосудистой системы);
            </li>
            <li>НИЗКОКАЛОРИЙНЫЕ;</li>
            <li>
              КОРОТКАЯ ТЕРМИЧЕСКАЯ ОБРАБОТКА 3-5 СЕКУНД (что возможно только при
              минимальной толщине хлебца, это позволяет сохранить все полезные
              минералы и витамины, находящиеся в сыром зерне и специях.
            </li>
          </ul>
         <p>Мы гордимся тем, что смогли сделать действительно полезный продукт
          вкусным!</p>
          <p className={style.contact_us_title}>Связаться с нами:</p>
          <div className={style.contact_us}>
            <p>
              <span> Тел.</span> +375 29 182-01-71.
            </p>
            <p>
              <span>Email:</span> info@jay.by{" "}
            </p>
          </div>
        </div>
        <div className={style.about_us_for_partner}>
          <h2 className={style.about_titles}> Нашим уважаемым партнёрам:</h2>
          <p>
            {" "}
            Имея значительный опыт в дистрибуции товаров, мы прекрасно понимаем
            насколько важен для дистрибьютера и ретейлера профессиональный
            подход и поддержка товара от производителя. Именно поэтому мы
            уверены, что сможем найти с Вами общий интерес! Если Вас
            заинтересовал наш продукт, то мы с большим удовольствием готовы
            обсудить условия сотрудничества!
          </p>
          <p className={style.contact_us_title}>Связаться с нами:</p>
          <div className={style.contact_us}>
            <p>
              <span> Тел.</span> +375 29 182-01-71.
            </p>
            <p>
              <span>Email:</span> info@flt.by{" "}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
