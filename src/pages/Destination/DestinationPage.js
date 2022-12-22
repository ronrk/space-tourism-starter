import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DestinationContent } from "../../components";
import Wrapper from "./DestinationPage.styled";

const DestinationPage = ({ destinations }) => {
  const [destinationQuery, setDestinationQuery] = useState("");
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    setDestinationQuery(query.get("query"));
  }, [query]);

  let activeDestination = destinations?.find((destination) => {
    return destination.name.toLowerCase() === destinationQuery;
  });

  const handleTabChange = (value) => {
    navigate("/destination?query=" + value);
  };

  return (
    <Wrapper className="">
      <h1 className="">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>
      <picture>
        <source srcSet={activeDestination?.images.webp} type="image/webp" />
        <img
          src={activeDestination?.images?.png}
          alt={activeDestination?.name}
        />
      </picture>

      <div className="">
        <button
          onClick={() => handleTabChange("moon")}
          aria-selected={destinationQuery === "moon"}
        >
          Moon
        </button>

        <button
          onClick={() => handleTabChange("mars")}
          aria-selected={destinationQuery === "mars"}
        >
          mars
        </button>

        <button
          onClick={() => handleTabChange("europa")}
          aria-selected={destinationQuery === "europa"}
        >
          europa
        </button>

        <button
          onClick={() => handleTabChange("titan")}
          aria-selected={destinationQuery === "titan"}
        >
          titan
        </button>
      </div>
      <DestinationContent destination={activeDestination} />
    </Wrapper>
  );
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default DestinationPage;
