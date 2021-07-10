import { useState, Fragment } from "react";
import {
  SkillsContainer,
  SkillsBlock,
  SkillsName,
  SkillsValue,
  ProgressBar,
} from "../styled-components/SkillsStyles";
import {
  Container,
  Heading,
  Message,
} from "../styled-components//SharedStyles";
import { Row, Col } from "../styled-components/GridStyles";

const Skills = () => {
  const [state] = useState({
    heading: "Porównanie życia dzieci z rodzicami",
    subHeading:
      "Moja mama żyła o 24 lata krócej od swojej mamy i o 14 lat krócej od swojego ojca. Mój tata żył o 2 lata dłużej niż jego ojciec, a o 9 lat krócej, niż jego mama. Przeciętnie pokolenie dzieci, które przeniosły się do miasta żyło znacznie krócej, niż rodzice mieszkający na wsi.",
  });
  const [mySkills] = useState([
    { id: 1, name: "Marianna Ofiara (córka Heleny i Józefa)", value: 55 },
    { id: 2, name: "Józef Gierczak (syn Agnieszki i Jana)", value: 66 },
    { id: 3, name: "Helena Sobień (matka Marianny)", value: 79 },
    { id: 4, name: "Józef Ofiara (ojciec Marianny)", value: 69 },
    { id: 5, name: "Agnieszka Baćmaga (matka Józefa)", value: 75 },
    { id: 6, name: "Jan Gierczak (ojciec Józefa)", value: 64 },
  ]);

  return (
    <SkillsContainer>
      <Container>
        <Row align="center">
          <Col col={6}>
            <Heading>{state.heading}</Heading>
            <Message>{state.subHeading}</Message>
          </Col>
          <Col col={6}>
            {mySkills.map((skill) => (
              <Fragment key={skill.id}>
                <SkillsBlock>
                  <SkillsName> {skill.name}</SkillsName>
                  <SkillsValue>{skill.value} lat</SkillsValue>
                </SkillsBlock>
                <ProgressBar max="100" value={skill.value} />
              </Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
