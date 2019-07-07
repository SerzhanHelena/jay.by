import React, { Component } from "react";
import style from "./Advices.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Advices extends Component {
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
    const adviceBg = {
      background: `url('https://cdn.pixabay.com/photo/2016/03/15/17/07/girl-1258727_960_720.jpg')`,
      backgroundSize: "contain",
      backgroundPosition: "0% 0%",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      width: "100%"
    };

    return (
      <section id="advices_section">
        <div className={style.advices_wrapper}>
          <div style={adviceBg} className={style.advices_image} />
          <div className={style.advice_content}>
            <div className={style.advice_item}>
              <div data-aos="fade-right" className={style.advices_text}>
                <h2 className={style.advice_title}>Зарядка</h2>
                <p>
                  Здоровый образ жизни невозможен без утренней разминки или
                  зарядки, которая подготовит наш организм к работоспособному
                  состоянию, снимет сонливость и вялость, приподнимет
                  настроение. Упражнения для утренней зарядки нужно подобрать с
                  упором на гибкость, подвижность и правильное дыхание. Делайте
                  зарядку плавно никуда не спеша.
                </p>
              </div>
            </div>
            <hr />
            <div className={style.advice_item}>
              <div data-aos="fade-left" className={style.advices_text}>
                <h2 className={style.advice_title}>Режим питания</h2>
                <p>
                  Вспомните фразу — «Ты — то, что ты ешь». Интересуйтесь
                  принципами правильного питания, советуйтесь со специалистами.
                  Обратите свое внимание на Пирамиду питания, разработанную
                  диетологами. Схема ее очень простая — всё, что у основы,
                  употребляйте как можно чаще, а то, что сходится к вершине, —
                  реже или осторожно. С пищей мы получаем силу, энергию,
                  витамины для поддержания жизнедеятельности. Но ее избыток
                  также чреват плохими последствиями
                </p>
              </div>
            </div>
            <hr />
            <div className={style.advice_item}>
              <div data-aos="fade-right" className={style.advices_text}>
                <h2 className={style.advice_title}>Следите за своими весом</h2>
                <p>
                  Лишние килограммы и здоровый образ жизни вещи несовместимые.
                  Лишний вес приведет Вас к тяжелым заболеваниям сердца, легких,
                  желудочно-кишечного тракта и испортит позвоночник. Лишний вес
                  попадает не только под кожу, но и на внутренние органы. Не
                  занимайтесь самодеятельностью и не сидите по неделе на разных
                  диетах, гораздо эффективней и безопасней для вашего здоровья
                  будет сходить к диетологу, который и сделает для Вас
                  правильную диету.
                </p>
              </div>
            </div>
            <hr />
            <div className={style.advice_item}>
              <div data-aos="fade-left" className={style.advices_text}>
                <h2 className={style.advice_title}>
                  Откажитесь от вредных привычек
                </h2>
                <p>
                  От вредных привычек отказаться всегда очень тяжело, но к
                  сожалению здоровый жизни и вредные привычки просто не
                  совместимы. Подумайте, что вредная привычка не только
                  зависимость, а еще и яд, которые берут над вами верх. В первую
                  очередь это курение: Вы отравляете не одного себя, но и
                  людей, детей, живущих с вами рядом, или обыкновенных встречных
                  на улице.
                </p>
              </div>
            </div>
            <hr />
            <div className={style.advice_item}>
              <div data-aos="fade-right" className={style.advices_text}>
                <h2 className={style.advice_title}>Создайте режим дня</h2>
                <p>
                  Режим дня — это план действий, необходимое планирования жизни
                  для оптимизации собственного времени. Соблюдать режим дня
                  гораздо проще чем Вы думаете нужно лишь немного времени, чтобы
                  выработать привычку.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Advices;
