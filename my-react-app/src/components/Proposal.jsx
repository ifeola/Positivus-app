import image from "../images/free-proposal.svg";

const Proposal = () => {
  return (
    <section id="proposal">
      <div className="proposal__container container">
        <div className="proposal__item-left">
          <h3 className="proposal__title">Let’s make things happen</h3>
          <p className="description proposal__description">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <a href="" className="proposal__btn btn__big">
            Get your free proposal
          </a>
        </div>
        <div className="proposal__item-right">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Proposal;
