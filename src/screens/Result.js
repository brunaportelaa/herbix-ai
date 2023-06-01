import styled from "styled-components";
import Logo from "../components/Logo";
import {
  BorderRadiuses,
  Colors,
  FontFamilies,
  Spaces,
} from "../shared/DesignTokens";
import { Button } from "../components/Button";
import PlantImg from "../images/plant-mockup.png";
import ImageContext from "../context/ImageContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ResultsBox = styled.div`
  box-sizing: border-box;
  background-color: rgba(0, 1, 22, 0.61);
  width: 75%;
  margin: 40px auto;
  color: ${Colors.NEUTRAL_WHITE};
  font-family: ${FontFamilies.PRIMARY};
  border-radius: ${BorderRadiuses.TWO};
  padding: ${Spaces.EIGHT};

  @media (max-width: 768px) {
    width: 95%;
    padding: ${Spaces.FOUR};
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlantImage = styled.img`
  max-width: 300px;
  margin: ${Spaces.TWO};
`;

const Description = styled.p`
  padding: 0 0 0 25px;
`;
export function Result() {
  const { image } = useContext(ImageContext);
  let navigate = useNavigate();

  return (
    <ResultsBox>
      <Logo />
      <h2>{image.label}</h2>
      <Flex>
        <PlantImage src={PlantImg} />
        <Description>
          Uma breve descrição do que é a doença e algumas formas de tratá-la.
          Acho que a gente pode inclusive gerar ela com uma requisição para a
          API do Chat GPT, se não for muito complexo.
        </Description>
      </Flex>
      <Button onClick={() => navigate("/")}>Fazer outra pesquisa</Button>
    </ResultsBox>
  );
}
