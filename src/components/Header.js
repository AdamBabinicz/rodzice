import { useState } from "react";
import Popup from "./Popup";
import {
  HeaderContainer,
  HeaderHeading,
  SubHeading,
} from "../styled-components/HeaderStyles";
import { Container, Link } from "../styled-components/SharedStyles";
import img1 from "../images/4.png";

const Header = () => {
  const [state] = useState({
    heading: "Marianna i Józef",
    subHeading: "była sobie rodzina",
    title: "O rodzicach",
    img: img1,
    p: "Rodzice byli bardzo wrażliwi na ludzką biedę. Ich troska o osoby potrzebujące pomocy sprawiała, że zacząłem zwracać uwagę na takie sytuacje.",
    em: "Adam",
  });
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <HeaderHeading>{state.heading}</HeaderHeading>
        <SubHeading>{state.subHeading}</SubHeading>
        <Link
          // to="/download-resume"
          onClick={() => setButtonPopup(true)}
          primary={true}
        >
          Więcej
        </Link>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{state.title}</h3>
          <br />
          <img src={state.img} /> <br />
          <p>{state.p}</p>
          <br />
          <em>{state.em}</em>
        </Popup>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
