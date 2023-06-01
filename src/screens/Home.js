import Logo from "../components/Logo";
import { Description } from "../components/Description";
import { Button } from "../components/Button";
import styled from "styled-components";
import { getToken, identificarPraga } from "../services/nyckel";
import { useContext, useRef } from "react";
import ImageContext from "../context/ImageContext";
import { useNavigate } from "react-router-dom";

const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Home() {
  const { onImageChange } = useContext(ImageContext);
  let navigate = useNavigate();
  const inputRef = useRef(null);

  const selecionarImg = async () => {
    inputRef.current.click();
  };

  const identificarImg = async (e) => {
    const img = e.target.files[0];
    const { data } = await getToken();

    const praga = await identificarPraga(img, data.access_token);
    onImageChange({ image: img, label: praga.labelName });
    navigate("/resultado");
  };

  return (
    <HomeDiv>
      <div>
        <Logo />
        <Description>
          Detecte facilmente pragas, pestes e doenças nas suas plantações
          utilizando Inteligência Artificial
        </Description>
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={identificarImg}
        />
        <Button onClick={selecionarImg}>Fazer upload da imagem</Button>
      </div>
    </HomeDiv>
  );
}
