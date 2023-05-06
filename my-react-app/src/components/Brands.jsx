import Amazon from "../images/Amazon.svg";
import Dribbble from "../images/dribbble.svg";
import Hubspot from "../images/hubspot.svg";
import Netflix from "../images/netflix.svg";
import Notion from "../images/notion.svg";
import Zoom from "../images/zoom.svg";

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands__container container">
        <img src={Amazon} alt="" />
        <img src={Dribbble} alt="" />
        <img src={Hubspot} alt="" />
        <img src={Netflix} alt="" />
        <img src={Notion} alt="" />
        <img src={Zoom} alt="" />
      </div>
    </section>
  );
};

export default Brands;
