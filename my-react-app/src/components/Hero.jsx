import heroImage from "../images/home_image.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__items">
          <h1 className="hero__heading">
            Navigating the digital landscape for success
          </h1>
          <img
            src={heroImage}
            alt="Hero Image"
            className="hero__image-mobile"
          />
          <p className="hero__description description">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <a href="/" className="btn__big hero__btn">
            Book a consultation
          </a>
        </div>
        <div className="hero__image-desk">
          <img src={heroImage} alt="Hero Image" className="hero__image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
