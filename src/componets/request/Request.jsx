import styles from "./Request.module.scss";

const Request = () => {
  const handleChange = (event) => {
    const select = event.target;
    if (select.selectedIndex !== 0) {
      select.style.color = "#1b1f2b";
    }
  };

  return (
    <section id="request" className={styles.request + " section"}>
      <div className="container">
        <h2 className="section-title">Собери свой тур</h2>
        <p className={styles.subtitle + " p-normal"}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <form className={styles.form}>
          <div className={styles.block + " " + styles.blockTop}>
            <label className={styles.label + " p-normal"}>
              Имя
              <input
                type="text"
                placeholder="Введите Ваше имя"
                className={styles.input + " p-normal"}
              />
            </label>
            <label className={styles.label + " p-normal"}>
              Направление
              <select
                required
                className={
                  styles.input + " " + styles.inputSelect + " p-normal"
                }
                defaultValue={"none"}
                onChange={handleChange}
              >
                <option value="none" disabled hidden>
                  Куда хотите ехать
                </option>
                <option value="Север">Север</option>
                <option value="Восток">Восток</option>
                <option value="Запад">Запад</option>
                <option value="Юг">Юг</option>
              </select>
            </label>
          </div>
          <div className={styles.block}>
            <label className={styles.label + " p-normal"}>
              Email
              <input
                placeholder="example@mail.com"
                type="email"
                className={styles.input + " p-normal"}
              />
            </label>
            <label className={styles.label + " p-normal"}>
              Телефон
              <input
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                type="tel"
                className={styles.input + " p-normal"}
              />
            </label>
          </div>
          <div className={styles.block}>
            <label className={styles.label + " p-normal"}>
              Дата от
              <input
                type="date"
                required
                placeholder="ДД.ММ.ГГГГ"
                className={styles.input + " " + styles.inputDate + " p-normal"}
              />
            </label>
            <label className={styles.label + " p-normal"}>
              Дата до
              <input
                type="date"
                required
                placeholder="ДД.ММ.ГГГГ"
                className={styles.input + " " + styles.inputDate + " p-normal"}
              />
            </label>
          </div>
          <div className={styles.block}>
            <label
              className={styles.label + " " + styles.labelComment + " p-normal"}
            >
              Комментарий
              <textarea
                rows={4}
                className={
                  styles.input + " " + styles.inputComment + " p-normal"
                }
              />
            </label>
          </div>
          <div className={styles.block + " " + styles.blockRadio}>
            <p className={styles.text + " p-normal"}>Вам есть 18 лет?</p>
            <div className={styles.group}>
              <label
                className={styles.label + " " + styles.labelRadio + " p-normal"}
              >
                <input
                  className={styles.input + " " + styles.inputRadio}
                  type="radio"
                  name="age"
                />
                <span>Да</span>
              </label>
              <label
                className={styles.label + " " + styles.labelRadio + " p-normal"}
              >
                <input
                  className={styles.input + " " + styles.inputRadio}
                  type="radio"
                  name="age"
                />
                <span>Нет</span>
              </label>
            </div>
          </div>
          <div className={styles.block + " " + styles.blockCheckbox}>
            <label
              className={
                styles.label + " " + styles.labelCheckbox + " p-normal"
              }
            >
              <input
                className={styles.input + " " + styles.inputCheckbox}
                type="checkbox"
                name=""
                id=""
              />
              <span>
                Нажимая кнопку, я принимаю условия{" "}
                <a href="/#" className={styles.link}>
                  Лицензионного договора
                </a>
              </span>
            </label>
          </div>
          <div className={styles.block + " " + styles.blockBtn}>
            <button className={styles.btn + " p-normal"} type="submit">
              Найти тур
            </button>
            <button
              className={styles.btn + " " + styles.btnReset + " p-normal"}
              type="reset"
            >
              Сбросить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Request;
