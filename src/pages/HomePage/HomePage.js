import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./HomePage.styled";

const HomePage = () => {
  return (
    <Wrapper className="">
      <div>
        <h1>
          SO, YOU WANT TO TRAVEL TO
          <span>SPACE</span>
        </h1>

        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <Link to="/design">Explore</Link>
      </div>
    </Wrapper>
  );
};

export default HomePage;
