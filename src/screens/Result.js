import styled from "styled-components";
import Logo from "../components/Logo";
import {
  BorderRadiuses,
  Colors,
  FontFamilies,
  Spaces,
} from "../shared/DesignTokens";
import { Button } from "../components/Button";
import ImageContext from "../context/ImageContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import formigacortadeira from "../images/pragas/formigacortadeira.png";
import cochonilha from "../images/pragas/cochonilha.jpg";
import acarorajado from "../images/pragas/acarorajado.jpeg";
import coros from "../images/pragas/coros.jpg";
import helicoverpaarmigera from "../images/pragas/helicoverpaarmigera.jpg";
import lagartadocartucho from "../images/pragas/lagartadocartucho.jpg";
import larvaminadora from "../images/pragas/larvaminadora.jpg";
import moscabranca from "../images/pragas/mosca-branca.jpg";
import percevejomarrom from "../images/pragas/percevejomarrom.jpg";
import pulgoes from "../images/pragas/pulgoes.jpg";

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

  const renderDefault = (nome) => {
    switch (nome) {
      case "Formiga cortadeira":
        return {
          image: <PlantImage src={formigacortadeira} />,
          text: "As formigas cortadeiras são insetos que cortam e transportam fragmentos de folhas para seus ninhos. Elas cultivam um fungo nos fragmentos cortados, que serve de alimento para a colônia. Esse comportamento pode prejudicar o crescimento das plantas afetadas.",
        };
      case "Cochonilhas":
        return {
          image: <PlantImage src={cochonilha} />,
          text: "A cochonilha é um inseto sugador que ataca plantas, formando carapaças brancas ou marrons em seus ramos e folhas. Ela se alimenta da seiva das plantas, enfraquecendo-as e podendo levar à morte das partes afetadas.",
        };
      case "Pulgões":
        return {
          image: <PlantImage src={pulgoes} />,
          text: "Os pulgões são pequenos insetos sugadores que se multiplicam rapidamente. Eles se alimentam da seiva das plantas, causando danos diretos, como deformações e amarelecimento das folhas. Além disso, eles também podem transmitir vírus às plantas, agravando os danos.",
        };
      case "Ácaro rajado":
        return {
          image: <PlantImage src={acarorajado} />,
          text: "É um tipo de ácaro que causa danos nas plantas, formando manchas avermelhadas nas folhas. Essas manchas são resultado da sucção de seiva pelas larvas do ácaro.",
        };
      case "Corós":
        return {
          image: <PlantImage src={coros} />,
          text: "Os coros são doenças fúngicas que afetam as plantas, causando manchas necróticas nas folhas e frutos. Essas manchas podem se espalhar rapidamente, comprometendo a saúde e o desenvolvimento da planta.",
        };
      case "Helicoverpa armigera":
        return {
          image: <PlantImage src={helicoverpaarmigera} />,
          text: "A helicoverpa armigera é uma espécie de lagarta considerada uma praga agrícola. Ela ataca diversas culturas, causando danos significativos às plantas, especialmente às folhas, flores e frutos, prejudicando a produção agrícola.",
        };
      case "Lagarta-do-cartucho":
        return {
          image: <PlantImage src={lagartadocartucho} />,
          text: "A lagarta do cartucho é uma praga que ataca espigas de milho. Ela se alimenta dos grãos em desenvolvimento, causando danos severos à produção. É importante controlar essa lagarta para evitar perdas econômicas.",
        };
      case "Larva minadora":
        return {
          image: <PlantImage src={larvaminadora} />,
          text: "Lavaminadoras são larvas de insetos que se alimentam do tecido foliar das plantas. Elas criam rastros minados nas folhas, deixando-as com aparência de enrugadas e com áreas transparentes. Esse tipo de dano pode afetar a fotossíntese e enfraquecer a planta.",
        };
      case "Mosca-branca":
        return {
          image: <PlantImage src={moscabranca} />,
          text: "A mosca branca é um pequeno inseto sugador que se alimenta da seiva das plantas. Além de enfraquecer as plantas, ela também pode transmitir vírus, levando a doenças e danos mais severos.",
        };
      case "Percevejo-marrom":
        return {
          image: <PlantImage src={percevejomarrom} />,
          text: "O percebo marrom é um inseto que se alimenta da seiva das plantas. Além de causar danos diretos, enfraquecendo a planta, ele também pode transmitir doenças às plantas, prejudicando seu crescimento e desenvolvimento.",
        };

      default:
        break;
    }
  };

  return (
    <ResultsBox>
      <Logo />
      <h2>{image.label}</h2>
      <Flex>
        {renderDefault(image.label).image}
        <Description>{renderDefault(image.label).text}</Description>
      </Flex>
      <Button onClick={() => navigate("/")}>Fazer outra pesquisa</Button>
    </ResultsBox>
  );
}
