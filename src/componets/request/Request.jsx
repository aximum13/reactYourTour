import { useState } from "react";
import classNames from "classnames";
import { Container } from "componets/container/Container";
import { Section } from "componets/section/Section";
import { SectionTitle } from "componets/section/sectionTitle/sectionTitle";

import stylesText from "styles/text.module.scss";
import styles from "./Request.module.scss";

const Request = () => {
  const defaultValue = "none";
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const resetForm = () => {
    setSelectedOption(defaultValue);
  };

  return (
    <Section id="request" className={styles.request}>
      <Container>
        <SectionTitle>Собери свой тур</SectionTitle>
        <p className={classNames(styles.subtitle, stylesText.normal)}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <form className={styles.form}>
          <div className={classNames(styles.block, styles.blockTop)}>
            <label className={classNames(styles.label, stylesText.normal)}>
              Имя
              <input
                type="text"
                placeholder="Введите Ваше имя"
                className={classNames(styles.input, stylesText.normal)}
              />
            </label>
            <label className={classNames(styles.label, stylesText.normal)}>
              Направление
              <select
                required
                className={classNames(
                  styles.input,
                  styles.inputSelect,
                  {
                    [styles.inputSelectPlaceholder]: selectedOption === "none",
                  },
                  stylesText.normal
                )}
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
            <label className={classNames(styles.label, stylesText.normal)}>
              Email
              <input
                placeholder="example@mail.com"
                type="email"
                className={classNames(styles.input, stylesText.normal)}
              />
            </label>
            <label className={classNames(styles.label, stylesText.normal)}>
              Телефон
              <input
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                type="tel"
                className={classNames(styles.input, stylesText.normal)}
              />
            </label>
          </div>
          <div className={styles.block}>
            <label className={classNames(styles.label, stylesText.normal)}>
              Дата от
              <input
                type="date"
                required
                placeholder="ДД.ММ.ГГГГ"
                className={classNames(
                  styles.input,
                  styles.inputDate,
                  stylesText.normal
                )}
              />
            </label>
            <label className={classNames(styles.label, stylesText.normal)}>
              Дата до
              <input
                type="date"
                required
                placeholder="ДД.ММ.ГГГГ"
                className={classNames(
                  styles.input,
                  styles.inputDate,
                  stylesText.normal
                )}
              />
            </label>
          </div>
          <div className={styles.block}>
            <label
              className={classNames(
                styles.label,
                styles.labelComment,
                stylesText.normal
              )}
            >
              Комментарий
              <textarea
                rows={4}
                className={classNames(
                  styles.input,
                  styles.inputComment,
                  stylesText.normal
                )}
              />
            </label>
          </div>
          <div className={classNames(styles.block, styles.blockRadio)}>
            <p className={classNames(styles.text, stylesText.normal)}>
              Вам есть 18 лет?
            </p>
            <div className={styles.group}>
              <label
                className={classNames(
                  styles.label,
                  styles.labelRadio,
                  stylesText.normal
                )}
              >
                <input
                  className={classNames(styles.input, styles.inputRadio)}
                  type="radio"
                  name="age"
                />
                <span>Да</span>
              </label>
              <label
                className={classNames(
                  styles.label,
                  styles.labelRadio,
                  stylesText.normal
                )}
              >
                <input
                  className={classNames(styles.input, styles.inputRadio)}
                  type="radio"
                  name="age"
                />
                <span>Нет</span>
              </label>
            </div>
          </div>
          <div className={classNames(styles.block, styles.blockCheckbox)}>
            <label
              className={classNames(
                styles.label,
                styles.labelCheckbox,
                stylesText.normal
              )}
            >
              <input
                className={classNames(styles.input, styles.inputCheckbox)}
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
          <div className={classNames(styles.block, styles.blockBtn)}>
            <button
              className={classNames(styles.btn, stylesText.normal)}
              type="submit"
            >
              Найти тур
            </button>
            <button
              className={classNames(styles.btn, styles.btnReset, stylesText.normal)}
              type="reset"
              onClick={resetForm}
            >
              Сбросить
            </button>
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default Request;
