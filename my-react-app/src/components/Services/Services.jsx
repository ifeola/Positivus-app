import { IoArrowUpOutline } from "react-icons/io5";
import data from "./data";

const Services = () => {
  return (
    <section className="services">
      <div className="services__container container">
        <div className="header">
          <h2 className="section__title">Services</h2>
          <p className="section__description description">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="services__list">
          {data.map((item) => {
            return (
              <div className="service__card">
                <div>
                  <div className="heading">
                    <h3 className="heading__item">{item.titleOne}</h3>
                    <h3 className="heading__item">{item.titleTwo}</h3>
                  </div>
                </div>
                <div className="services__card-bottom">
                  <a className="services__cta" href="/">
                    <span className="services__icon">
                      <IoArrowUpOutline />
                    </span>
                    <span className="cta">Learn More</span>
                  </a>
                  <img
                    className="services__image"
                    src={`../src/${item.image}`}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
