import React from "react";
import Wrapper from "./CrewContent.styled";

const CrewContent = ({ crewMemeber, className }) => {
  if (!crewMemeber) return;
  const { name, role, bio } = crewMemeber;

  return (
    <Wrapper className={className + ""}>
      <header className="">
        <h2 className="">{role}</h2>
        <p className="">{name}</p>
      </header>
      <p>{bio}</p>
    </Wrapper>
  );
};

export default CrewContent;
