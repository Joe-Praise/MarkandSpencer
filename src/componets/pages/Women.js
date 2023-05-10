import React from "react";
import CircleCard from "../media scroller/CircleCard";
import slide1 from "../../images/womenPage/slider_1.webp";
import slide2 from "../../images/womenPage/slider_2.webp";
import slide3 from "../../images/womenPage/slider_3.webp";
import slide4 from "../../images/womenPage/slider_4.webp";
import slide5 from "../../images/womenPage/slider_5.webp";
import slide6 from "../../images/womenPage/slider_6.webp";
import slide7 from "../../images/womenPage/slider_7.webp";
import slide8 from "../../images/womenPage/slider_8.webp";
import slide9 from "../../images/womenPage/slider_9.webp";
import slide10 from "../../images/womenPage/slider_10.webp";
import WomenBgGrid from "../bgGridLayout/WomenBgGrid";
import Minicard from "../cards/womenCard/Minicard";
import card1img from "../../images/womenPage/card-1_in_1.webp";
import card2img from "../../images/womenPage/card-2_in_2.webp";
import EscapeForWinter from "../cards/womenCard/EscapeForWinter";
import Yourway from "../yourWay/Yourway";
import ValueYouCanTrust from "../cards/womenCard/Value_you_can_trust/ValueYouCanTrust";
import WaysToWow from "../cards/womenCard/ways_to_wow/WaysToWow";
import MoreToExplore from "../cards/womenCard/MoreToExplore";
import Brands from "../brands/Brands";

const Women = () => {
  return (
    <section>
      <div className="contain">
        <h1>Women</h1>
        <div className="horizontal_scroll_container snaps_inline height">
          <CircleCard pic={slide1} text={"Day-to-night outfits"} />
          <CircleCard pic={slide2} text={"Dresses"} />
          <CircleCard pic={slide3} text={"Knitwear"} />
          <CircleCard pic={slide4} text={"Coats & jackets"} />
          <CircleCard pic={slide5} text={"Shirts & blouses"} />
          <CircleCard pic={slide6} text={"Jeans"} />
          <CircleCard pic={slide7} text={"Trousers"} />
          <CircleCard pic={slide8} text={"Sexy lingerie"} />
          <CircleCard pic={slide9} text={"Valentine’s Day nightwear"} />
          <CircleCard pic={slide10} text={"Trending: pink clothing"} />
        </div>

        <WomenBgGrid />

        <Minicard
          img={card1img}
          text1={"It's the little things"}
          text2={"Celebrate love in all it's forms"}
          text3={"Shop Valentine's Day gift"}
        />

        <EscapeForWinter />
        <Yourway />
        <ValueYouCanTrust />
        <WaysToWow />

        {/* used to target and change the card color */}
        <div className="mini_2">
          <Minicard
            img={card2img}
            text1={"The Edit"}
            text2={"The very best pieces of the season"}
            text3={"Shop now"}
          />
        </div>
        <MoreToExplore />
        <Brands />
      </div>
    </section>
  );
};

export default Women;
