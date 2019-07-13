import React, { Component } from "react";
import style from "./mainPage.module.css";
import MainPageBackground from "../../images/main1.jpg";
import rice from "../../images/ingredients/ris.png";
import kukuruza from "../../images/ingredients/kukuruza.png";
import grechka from "../../images/ingredients/grechka.png";
import psho from "../../images/ingredients/psho.png";
import sol from "../../images/ingredients/sol.png";
import trav from "../../images/ingredients/trav.png";
import len from "../../images/ingredients/len.png";
import kor from "../../images/ingredients/kor.png";
import stev from "../../images/ingredients/stev.png";
import AOS from "aos";
import "aos/dist/aos.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init({
      duration: 1200
    });
  }
  render() {
    return (
      <main>
        <section id="main_section1" className={style.main_section}>
          <div className={style.inner}>
            <div className={style.copy}>
              <h1 className={style.main_title}>
                Jay - легкость в каждом движении
              </h1>
            </div>
          </div>
        </section>
        <section id="main_section3" className={style.content}>
          <div className={style.inner}>
            <div className={style.inner_content}>
              <div data-aos="fade-right" className={style.ingredients_item}>
                <div className={style.inner_content_image}>
                  <img className={style.ingredients_image} src={rice} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>Рис</p>
                  <p className={style.inner_content_info_text}>
                    В рисе содержатся восемь жизненно важных для человека
                    аминокислот, без которых невозможно создание новых клеток.
                    7-8% рисовых зерен составляют белки. В состав риса входит
                    лецитин, активизирующий работу мозга, гамма-аминомасляная
                    кислота, помогающая поддерживать в норме кровяное давление,
                    и олигосахарид, который способствует восстановлению
                    кишечника.
                  </p>
                </div>
              </div>

              <div data-aos="fade-left" className={style.ingredients_item}>
                <div className={`${style.inner_content_image} ${style.row2}`}>
                  <img className={style.ingredients_image} src={kukuruza} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>Кукуруза</p>
                  <p className={style.inner_content_info_text}>
                    Кукуруза считается одной из самых популярных растительных
                    культур. Польза кукурузы, прежде всего, определяется ее
                    витаминно-минеральным составом. В ней содержатся витамины
                    группы В, Е, Н (биотин), А, а также такие микроэлементы как
                    кальций, магний, фосфор, калий, натрий, железо, йод и многие
                    другие.
                  </p>
                </div>
              </div>

              <div data-aos="fade-right" className={style.ingredients_item}>
                <div className={style.inner_content_image}>
                  <img className={style.ingredients_image} src={grechka} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>Гречка</p>
                  <p className={style.inner_content_info_text}>
                    Существует мнение о том, что гречка – это зерно. На самом
                    деле, это семена растения, которое имеет больше сходств с
                    ревенем, чем с пшеницей. Гречка – это источник минеральных
                    веществ, белка, флавоноидов и клетчатки. В её составе
                    присутствуют кверцитин, рутин, лизин и витексин. Гречка
                    богата антиоксидантами витаминами группы В
                  </p>
                </div>
              </div>

              <div data-aos="fade-left" className={style.ingredients_item}>
                <div className={`${style.inner_content_image} ${style.row2}`}>
                  <img  className={`${style.ingredients_image} ${style.image_psheno}`} src={psho} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>Пшено</p>
                  <p className={style.inner_content_info_text}>
                    Пшено неспроста называют золотой крупой. Дело не только в
                    солнечном оттенке, но и в полезных свойствах, которые для
                    культуры такой доступной категории действительно на вес
                    золота. Пшено считается одной из наименее аллергенных
                    зерновых культур. Оно очень легко усваивается организмом,
                    поэтому подходит даже для людей с чувствительным
                    пищеварением. Пшено оказывает на организм общеукрепляющее
                    воздействие, и считается, что оно способствует выведению из
                    организма антибиотиков и токсинов.
                  </p>
                </div>
              </div>

              <div data-aos="fade-right" className={style.ingredients_item}>
                <div className={style.inner_content_image}>
                  <img className={style.ingredients_image} src={sol} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>Морская соль</p>
                  <p className={style.inner_content_info_text}>
                    В морской соли содержатся калий, натрий, кальций, магний,
                    бром, йод — эти вещества помогают регулировать питание
                    клеток и их очищение, формируют клеточные оболочки, улучшают
                    передачу нервных импульсов, помогают крови сворачиваться,
                    мышцам — расслабляться, успокаивают нервную систему,
                    регулируют гормональный обмен. Помимо этого морская соль
                    обладает лечебными свойствами для кожи и поэтому активно
                    применяется в бальнеологии — она раздражает кожные покровы,
                    вызывая прилив крови к ним, в результате чего клетки кожи
                    активнее обновляются, быстрее происходит заживление
                    раздражений и повреждений. Соль воздействует на нервную
                    систему — это отличное средство снятия стресса.
                  </p>
                </div>
              </div>

              <div data-aos="fade-left" className={style.ingredients_item}>
                <div className={`${style.inner_content_image} ${style.row2}`}>
                  <img className={style.ingredients_image} src={trav} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>
                    Прованские травы
                  </p>
                  <p className={style.inner_content_info_text}>
                    Прованские травы - смесь пряных трав, в которую входят
                    розмарин, базилик, тимьян, шалфей, мята перечная, чабер
                    садовый, душица, майоран. Прованские травы являются не
                    только ароматной приправой, придающей блюдам неповторимый
                    вкус, но и содержат большое количество активных веществ,
                    обладающих полезными для организма свойствами.Так, в
                    прованских травах можно найти дубильные вещества, эфирные
                    масла, различные ферменты, смолы, минералы и витамины, а
                    также органические кислоты. Благодаря такому составу смесь
                    благотворно влияет на наш организм, обладает антибактериальными свойствами (благодаря розмарину
                    и душице), снижает артериальное давление, поднимает
                    настроение, избавляет от депрессии.
                  </p>
                </div>
              </div>

              <div data-aos="fade-right" className={style.ingredients_item}>
                <div className={style.inner_content_image}>
                  <img className={style.ingredients_image} src={len} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>Лен</p>
                  <p className={style.inner_content_info_text}>
                    Набор уникальных аминокислот, витаминов, клетчатка и жирные
                    кислоты делают семя льна уникальным диетическим средством,
                    которое находит применение в разных сферах — оздоровлении,
                    правильном питании, кулинарии и косметологии.
                  </p>
                </div>
              </div>

              <div data-aos="fade-left" className={style.ingredients_item}>
                <div className={`${style.inner_content_image} ${style.row2}`}>
                  <img className={`${style.ingredients_image} ${style.image_kor}`} src={kor} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>Корица</p>
                  <p className={style.inner_content_info_text}>
                    Корица - специя, которая по популярности не уступает ни
                    одной другой в кулинарии. Именно эта восточная приправа
                    придает выпечке и десертам неповторимый сладко-древесный
                    аромат. Но не стоит рассматривать ее исключительно в
                    качестве пикантной пряности. В чайной ложке молотой корицы
                    столько же антиоксидантов, сколько и в 150 г черники, а по
                    насыщенности полифенолами молотая корица превосходит все
                    остальные специи.
                  </p>
                </div>
              </div>

              <div data-aos="fade-right" className={style.ingredients_item}>
                <div className={style.inner_content_image}>
                  <img className={style.ingredients_image} src={stev} />
                </div>
                <div className={style.inner_content_info}>
                  <p className={style.inner_content_info_title}>Стевия</p>
                  <p className={style.inner_content_info_text}>
                    Заменитель сахара обладает минимальной калорийностью (18
                    ккал) и гликемическим индексом, равным 0. Именно благодаря
                    этим свойствам продукт просто незаменим для худеющих и лиц,
                    страдающих сахарным диабетом. Регулярное употребление
                    сахарозаменителя способствует нормализации работы многих
                    систем организма, укреплению иммунитета, снижению
                    артериального давления.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default MainPage;
