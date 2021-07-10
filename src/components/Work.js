import { useState } from "react";
import { WorkContainer, WorkImage } from "../styled-components/WorkStyles";
import { Container, Image, Heading } from "../styled-components/SharedStyles";
import { Row, Col } from "../styled-components/GridStyles";

const Work = () => {
  const [state] = useState([
    {
      id: 1,
      image: "/assets/images/2.jpg",
    },
    {
      id: 2,
      image: "/assets/images/25.jpg",
    },
    {
      id: 3,
      image: "/assets/images/21.jpg",
    },
    {
      id: 4,
      image: "/assets/images/15.jpg",
    },
    {
      id: 5,
      image: "/assets/images/23.jpg",
    },
    {
      id: 6,
      image: "/assets/images/41.jpg",
    },
  ]);
  const [heading] = useState("Moi rodzice");

  return (
    <WorkContainer>
      <Container>
        <Heading>{heading}</Heading>
        <Row>
          {state.map((work) => (
            <Col col={4} key={work.id}>
              <WorkImage>
                <Image src={work.image} />
              </WorkImage>
            </Col>
          ))}
        </Row>
      </Container>
    </WorkContainer>
  );
};

export default Work;
