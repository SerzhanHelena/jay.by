import React, { Component } from "react";
import style from "./mainPage.module.css";
import MainPageBackground from "../../images/main1.jpg";
import Grecha from "../../images/ingr/grecha.png";
import Travy from "../../images/ingr/provanskie_travy.png";
import Salt from "../../images/ingr/sil.png";

const bg = {
  background: `url(${MainPageBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed"
};

// const a = {
//   background: `url(${Grecha})`,

// }
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <section style={bg} id="main_section1" className={style.main_section}>
          <div className={style.inner}>
            <div className={style.copy}>
              <h1 className={style.main_title}>Легкость в каждом мгновении</h1>
              {/* <p>
                Its like im actually there! But sitting at a computer. Wow, the
                future is intense!
              </p> */}
            </div>
          </div>
        </section>
        {/* <section
          id="main_section2"
          className={style.main_section}
          style={{ background: "#e61d2b" }}
        >
          <div className={style.inner}>
            <div className={style.copy}>
              <h1>bla bla bla</h1>
              <p>bla bla</p>
            </div>
          </div>
        </section> */}
        <section id="main_section3" style={{background: 'rgba(0,0,0,0.7) url(https://cdn.pixabay.com/photo/2018/05/23/21/32/food-3425223_1280.jpg)',
      
      backgroundSize: 'contain'}} className={style.content}>
          <div className={style.inner}>
            <div className={style.inner_content}>
              <div className={style.inner_content_info}>
                {/* <div className={style.copy}>  */}
                <div className={style.content_wrapper}>
                  {/* <h1 className={style.useful_ingredients_title}>
                Польза в каждом ингредиенте
              </h1> */}
                  <div className={style.item_wrapper}>
                    <div className={`${style.item_container} ${style.row1}`}>
                      <div className={`${style.item} ${style.item_rice} `}>
                        {/* <img src={Grecha}
                      alt="Corn"
                    /> */}
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                          Рис
                          {/* <span className={style.item_title2}>ка</span> */}
                        </h1>
                      </div>
                      <p className={style.benefits}>
                        В рисе содержатся восемь жизненно важных для человека
                        аминокислот, без которых невозможно создание новых
                        клеток. 7-8% рисовых зерен составляют белки. В состав
                        риса входит лецитин, активизирующий работу мозга,
                        гамма-аминомасляная кислота, помогающая поддерживать в
                        норме кровяное давление, и олигосахарид, который
                        способствует восстановлению кишечника.
                      </p>
                    </div>

                    <div className={`${style.item_container} ${style.row2}`}>
                      <div className={`${style.item} ${style.item_corn}`}>
                        {/* <img
                      src={Travy}
                      alt="Corn"
                    /> */}
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                          Кукуруза
                          {/* <span className={style.item_title2}>травы</span> */}
                        </h1>
                      </div>
                      <p className={style.benefits}>
                        Кукуруза считается одной из самых популярных
                        растительных культур. Польза кукурузы, прежде всего,
                        определяется ее витаминно-минеральным составом. В ней
                        содержатся витамины группы В, Е, Н (биотин), А, а также
                        такие микроэлементы как кальций, магний, фосфор, калий,
                        натрий, железо, йод и многие другие.
                      </p>
                    </div>

                    <div className={`${style.item_container} ${style.row3}`}>
                      <div className={`${style.item} ${style.item_buckwheat}`}>
                        {/* <img
                      src="http://www.pngmart.com/files/1/Broccoli-PNG-Clipart.png"
                      alt="Corn"
                    /> */}
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                          Гречка
                        </h1>
                      </div>
                      <p className={style.benefits}>
                        Существует мнение о том, что гречка – это зерно. На
                        самом деле, это семена растения, которое имеет больше
                        сходств с ревенем, чем с пшеницей. Гречка – это источник
                        минеральных веществ, белка, флавоноидов и клетчатки. В
                        её составе присутствуют кверцитин, рутин, лизин и
                        витексин. Гречка богата антиоксидантами витаминами
                        группы В
                      </p>
                    </div>

                    <div className={`${style.item_container} ${style.row1}`}>
                      <div className={`${style.item} ${style.item_millet}`}>
                        {/* <img
                      src="http://www.pngmart.com/files/1/Broccoli-PNG-Clipart.png"
                      alt="Corn"
                    /> */}
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                          Пшено
                        </h1>
                      </div>
                      <p className={style.benefits}>
                        Пшено неспроста называют золотой крупой. Дело не только
                        в солнечном оттенке, но и в полезных свойствах, которые
                        для культуры такой доступной категории действительно на
                        вес золота. Пшенная каша богата витаминами и минералами.
                        Среди них: · витамин В6, который ускоряет метаболизм; ·
                        фосфор, укрепляющий кости и зубы; · кальций, который
                        способствует нормальной работе сердца; · витамины В5 и
                        В2, улучшающие состояние волос и кожи; · аминокислоты,
                        поддерживающие функционирование мышц.
                      </p>
                    </div>
                    {/* <div><img src={Salt}/></div> */}
                    <div className={`${style.item_container} ${style.row2}`}>
                      
                      <div className={`${style.item} ${style.item_sea_salt}`}>
                        {/* <img
                      src="http://www.pngmart.com/files/1/Broccoli-PNG-Clipart.png"
                      alt="Corn"
                    /> */}
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                          Морская соль
                        </h1>
                      </div>
                      <p className={style.benefits}>
                        Морская соль добывается из морской воды. Она по своему
                        химическому составу весьма богата макро- и
                        микроэлементами. Она содержит калий, кальций, йод,
                        магний, бром, хлор, железо, цинк, кремний, медь, фтор.
                        Благодаря такому составу морская соль: · оказывает
                        благотворное влияние на сердечно-сосудистую систему, ·
                        снижает уровень развития заболеваний
                        опорно-двигательного аппарата, · уменьшает риск развития
                        болезней щитовидной железы, · участвует в регенерации
                        клеток, · способствует повышению эластичности кожи, ·
                        обладает антисептическим действием, · помогает
                        купировать боль, · способствует снижению стресса, ·
                        повышает общий жизненный тонус
                      </p>
                    </div>

                    <div className={`${style.item_container} ${style.row3}`}>
                      <div className={`${style.item} ${style.item_linen}`}>
                        {/* <img
                      src="http://www.pngmart.com/files/1/Broccoli-PNG-Clipart.png"
                      alt="Corn"
                    /> */}
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                          Лен
                        </h1>
                      </div>
                      <p className={style.benefits}>
                        Набор уникальных аминокислот, витаминов, клетчатка и
                        жирные кислоты делают семя льна уникальным диетическим
                        средством, которое находит применение в разных сферах —
                        оздоровлении, правильном питании, кулинарии и
                        косметологии.
                      </p>
                    </div>
                   
                    <div className={`${style.item_container} ${style.row1}`}>
                    
                      <div className={`${style.item} ${style.item_herbs}`}>
                        
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                          Прованские травы
                        </h1>
                      </div>
                      <p className={style.benefits}>
                        Прованские травы - смесь пряных трав, в которую входят
                        розмарин, базилик, тимьян, шалфей, мята перечная, чабер
                        садовый, душица, майоран. Эти травы подобраны идеально
                        по своим вкусовым качествам, они прекрасно сочетаются
                        между собой и дополняют друг друга. Название смеси
                        производит от названия славящегося своими пряными
                        травами региона во Франции – Прованса.
                      </p>
                    </div>
                    
                    <div
                      className={`${style.item_container} ${
                        style.row2
                      }`}
                    >
                      <div className={`${style.item} ${style.item_cinnamon}`}>
                        {/* <img
                          src="http://www.pngmart.com/files/1/Broccoli-PNG-Clipart.png"
                          alt="Corn"
                        /> */}
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                           Корица
                        </h1>
                      </div>
                      <p className={style.benefits}>
                        В рисе содержатся восемь жизненно важных для человека
                        аминокислот, без которых невозможно создание новых
                        клеток. 7-8% рисовых зерен составляют белки. В состав
                        риса входит лецитин, активизирующий работу мозга,
                        гамма-аминомасляная кислота, помогающая поддерживать в
                        норме кровяное давление, и олигосахарид, который
                        способствует восстановлению кишечника.
                      </p>
                    </div>

                    <div
                      className={`${style.item_container} ${
                        style.row3
                      }`}
                    >
                      <div className={`${style.item} ${style.item_stevia}`}>
                        {/* <img
                          src="http://www.pngmart.com/files/1/Broccoli-PNG-Clipart.png"
                          alt="Corn"
                        /> */}
                        <h1
                          className={`${style.item_title} ${
                            style.advice_title
                          }`}
                        >
                           Стевия
                        </h1>
                      </div>
                      <p className={style.benefits}>
                      Главное преимущество стевии в том, что она не содержит калорий, но при этом в 200 раз слаще сахара в той же концентрации. 
                      </p>
                    </div>
                  </div>
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
