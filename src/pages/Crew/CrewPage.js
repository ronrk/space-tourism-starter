import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CrewContent } from "../../components";
import Wrapper from "./CrewPage.styled";

const CrewPage = ({ crew }) => {
  const [crewQuery, setCrewQuery] = useState("");
  const query = useQuery();

  useEffect(() => {
    setCrewQuery(query.get("query"));
  }, [query]);

  let activeCrew = crew?.find((crew) => {
    return crew.role.replaceAll(" ", "").toLowerCase() === crewQuery;
  });

  return (
    <Wrapper className="">
      <h1 className="">
        <span aria-hidden="">02</span>Meet your crew
      </h1>
      <CrewContent crewMemeber={activeCrew} className="" />
      <picture className="">
        <source srcSet={activeCrew?.images.webp} type="image/webp" />
        <img src={activeCrew?.images.png} alt="crew member" />
      </picture>

      <div className="">
        <button aria-selected="true">
          <span className="sr-only">The commander</span>
        </button>
        <button aria-selected="false">
          <span className="sr-only">The mission spicialist</span>
        </button>
        <button aria-selected="false">
          <span className="sr-only">The pilot</span>
        </button>
        <button aria-selected="false">
          <span className="sr-only">The crew engineer</span>
        </button>
      </div>
    </Wrapper>
  );
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default CrewPage;
