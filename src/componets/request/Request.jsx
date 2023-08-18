function Request() {
  function handleChange(event) {
    const select = event.target;
    if (select.selectedIndex !== 0) {
      select.style.color = "#1b1f2b";
    }
  }

  return (
    <section id="request" className="request section">
      <div className="container request__container">
        <h2 className="section-title request__title">Собери свой тур</h2>
        <p className="request__text p-normal">
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <form className="request__form form">
          <div className="form__block form__block_top">
            <label className="form__label p-normal">
              Имя
              <input
                type="text"
                placeholder="Введите Ваше имя"
                className="form__input p-normal"
              />
            </label>
            <label className="form__label p-normal">
              Направление
              <select
                required
                className="form__input form__input_select p-normal"
                defaultValue={"none"}
                onChange={handleChange}
              >
                <option
                  className="form__option form__option_disabled"
                  value="none"
                  disabled
                  hidden
                >
                  Куда хотите ехать
                </option>
                <option className="form__option" value="Север">
                  Север
                </option>
                <option className="form__option" value="Восток">
                  Восток
                </option>
                <option className="form__option" value="Запад">
                  Запад
                </option>
                <option className="form__option" value="Юг">
                  Юг
                </option>
              </select>
            </label>
          </div>
          <div className="form__block">
            <label className="form__label p-normal">
              Email
              <input
                placeholder="example@mail.com"
                type="email"
                className="form__input p-normal"
              />
            </label>
            <label className="form__label p-normal">
              Телефон
              <input
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                type="tel"
                className="form__input p-normal"
              />
            </label>
          </div>
          <div className="form__block">
            <label className="form__label p-normal">
              Дата от
              <input
                type="date"
                required
                placeholder="ДД.ММ.ГГГГ"
                className="form__input form__input_date p-normal"
              />
            </label>
            <label className="form__label p-normal">
              Дата до
              <input
                type="date"
                required
                placeholder="ДД.ММ.ГГГГ"
                className="form__input form__input_date p-normal"
              />
            </label>
          </div>
          <div className="form__block">
            <label className="form__label form__label_comment  p-normal">
              Комментарий
              <textarea
                rows={4}
                className="form__input p-normal form__input_comment"
                defaultValue={""}
              />
            </label>
          </div>
          <div className="form__block form__block_radio">
            <p className="form__text p-normal">Вам есть 18 лет?</p>
            <div className="form__group">
              <label className="form__label form__label_radio p-normal">
                <input
                  className="form__input form__input_radio"
                  type="radio"
                  name="age"
                />{" "}
                <span>Да</span>
              </label>
              <label className="form__label form__label_radio p-normal">
                <input
                  className="form__input form__input_radio"
                  type="radio"
                  name="age"
                />{" "}
                <span>Нет</span>
              </label>
            </div>
          </div>
          <div className="form__block form__block_checkbox">
            <label className="form__label form__label_checkbox p-small">
              <input
                className="form__input form__input_checkbox"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <span>
                Нажимая кнопку, я принимаю условия{" "}
                <a href="#" className="form__link">
                  Лицензионного договора
                </a>
              </span>
            </label>
          </div>
          <div className="form__block form__block_btn">
            <button
              className="form__btn form__btn_submit p-normal"
              type="submit"
            >
              Найти тур
            </button>
            <button className="form__btn form__btn_reset p-normal" type="reset">
              Сбросить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Request;
