import footerImg from "./../../img/footer/footer-img.jpg";

function Contact() {
  return (
    <section className="contacts section">
      <div className="container contacts__container">
        <div className="contacts__card card">
          <img src={footerImg} alt="" className="card__img" />
          <div className="card__block">
            <h3 className="section-subtitle card__title">
              Пора в путешествие вместе с нами!
            </h3>
            <p className="card__text p-normal">
              Напиши на почту и узнай подробности на{" "}
              <a
                href="mailto:yourtour@gmail.com"
                className="card__link p-normal"
              >
                yourtour@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
