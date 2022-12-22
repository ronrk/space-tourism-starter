import React from "react";
import Wrapper from "./DestinationContent.styled";

const DestinationContent = ({ destination }) => {
  if (!destination) {
    return;
  }
  const { name, distance, travel, description } = destination;
  return (
    <Wrapper className="">
      <h2 className="">{name}</h2>
      <p>{description}</p>
      <div className="">
        <div>
          <h3 className="">AVG. DISTANCE</h3>
          <p className="">{distance}</p>
        </div>
        <div>
          <h3 className="">Est. travel time</h3>
          <p className="">{travel}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default DestinationContent;
