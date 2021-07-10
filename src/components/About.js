import { useState } from "react";
import {
  AboutContainer,
  AboutImage,
  AboutHeading,
} from "../styled-components/AboutStyles";
import { Container, Image, Message } from "../styled-components/SharedStyles";
import { Row, Col } from "../styled-components/GridStyles";

const About = () => {
  const [state] = useState({
    heading: "Adam",
    subheading:
      "Moi rodzice dali mi duży margines odpowiedzialności za swoje czyny i życie. Dzięki temu czułem się nieskrępowany i niezależny od nikogo, chociaż wiedziałem, że zawdzięczam im wszystko.",
  });
  return (
    <AboutContainer>
      <Container>
        <Row>
          <Col col={3}>
            <AboutImage>
              <Image src="/assets/images/8.png" alt="..." />
            </AboutImage>
          </Col>
          <Col col={9}>
            <AboutHeading>{state.heading}</AboutHeading>
            <Message marginTop={20} width={70}>
              {state.subheading}
            </Message>
          </Col>
        </Row>
      </Container>
    </AboutContainer>
  );
};

export default About;
