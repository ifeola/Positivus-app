import { IoArrowUpOutline } from "react-icons/io5";

const data = [
  {
    paragraph:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    paragraph:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    paragraph:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const CaseStudy = () => {
  return (
    <section id="casestudy">
      <div className="casestudy__container container">
        <div className="header">
          <h2 className="section__title">Case Studies</h2>
          <p className="section__description description">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        <div className="casestudy__items">
          {data.map((item) => {
            return (
              <>
                <div className="casestudy__item">
                  <p className="casestudy__description description">
                    {item.paragraph}
                  </p>
                  <a className="casestudy__cta" href="/">
                    <span className="casestudy__btn">Learn More</span>
                    <span className="casestudy__icon">
                      <IoArrowUpOutline />
                    </span>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
