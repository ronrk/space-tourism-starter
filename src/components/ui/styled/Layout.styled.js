import styled from "styled-components";
import bgHomeDesktop from "../../../assets/home/background-home-desktop.jpg";
import bgHomeMobile from "../../../assets/home/background-home-mobile.jpg";
import bgHomeTablet from "../../../assets/home/background-home-tablet.jpg";
import bgDestinationDesktop from "../../../assets/destination/background-destination-desktop.jpg";
import bgDestinationTablet from "../../../assets/destination/background-destination-tablet.jpg";
import bgDestinationMobile from "../../../assets/destination/background-destination-mobile.jpg";
import bgCrewDesktop from "../../../assets/crew/background-crew-desktop.jpg";
import bgCrewTablet from "../../../assets/crew/background-crew-tablet.jpg";
import bgCrewMobile from "../../../assets/crew/background-crew-mobile.jpg";
import bgTechnologyDesktop from "../../../assets/technology/background-technology-desktop.jpg";
import bgTechnologyTablet from "../../../assets/technology/background-technology-tablet.jpg";
import bgTechnologyMobile from "../../../assets/technology/background-technology-mobile.jpg";

const LayoutWrapper = styled.div`
  &.home {
    background-image: url(${bgHomeMobile});

    @media screen and (min-width: 35em) {
      background-position: center center;
      background-image: url(${bgHomeTablet});
    }
    @media screen and (min-width: 45em) {
      background-image: url(${bgHomeDesktop});
    }
  }
  &.destination {
    background-image: url(${bgDestinationMobile});
    @media screen and (min-width: 35em) {
      background-position: center center;
      background-image: url(${bgDestinationTablet});
    }
    @media screen and (min-width: 45em) {
      background-image: url(${bgDestinationDesktop});
    }
  }
  &.crew {
    background-image: url(${bgCrewMobile});
    @media screen and (min-width: 35em) {
      background-position: center center;
      background-image: url(${bgCrewTablet});
    }
    @media screen and (min-width: 45em) {
      background-image: url(${bgCrewDesktop});
    }
  }
  &.technology {
    background-image: url(${bgTechnologyMobile});
    @media screen and (min-width: 35em) {
      background-position: center center;
      background-image: url(${bgTechnologyTablet});
    }
    @media screen and (min-width: 45em) {
      background-image: url(${bgTechnologyDesktop});
    }
  }
`;

export default LayoutWrapper;
