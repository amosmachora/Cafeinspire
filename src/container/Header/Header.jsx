import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Fathom the beauty of a great goddess in war with a british god on a
        snowy mountain with underlting molten lava. The greek god with muscles
        of a sick tiger beats the goddess so bad she has to celebrate the
        victory with her brazilian neighbours.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img ">
      <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;
