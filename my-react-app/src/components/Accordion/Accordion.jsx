import { useState } from "react";
import accordionData from "../Services/data";
import { IoAdd } from "react-icons/io";
import { IoMinus } from "react-icons/io";

const Accordion = () => {
  const [toggleAccordion, setToggleAccordion] = useState();

  const accordionHandler = () => {
  };

  return (
    <section id="accordion">
      <div className="container accordion__container">
        <div className="header">
          <h2 className="section__title">Our Working Process </h2>
          <p className="section__description description">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="accordions">
          {accordionData.map((item) => {
            return (
              <div className="accordion">
                <div className="accordion__top">
                  <span className="accordion__no">01</span>
                  <h3 className="accorordion__title">{item.question}</h3>
                  {toggleAccordion ? <IoMinus /> : <IoAdd />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
