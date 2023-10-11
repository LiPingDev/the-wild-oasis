import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

export default function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/img/logo-dark.png" : "/img/logo-light.png";

  return (
    <StyledLogo>
      <Link to="/">
        <Img src={src} alt="Logo" />
      </Link>
    </StyledLogo>
  );
}
