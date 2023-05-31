import Logo from '../components/Logo'
import { Description } from '../components/Description'
import { Button } from '../components/Button'
import styled from 'styled-components'

const HomeDiv = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export function Home() {
    return (
        <HomeDiv>
            <div>
                <Logo />
                <Description>Detecte facilmente pragas, pestes e doenças nas suas plantações utilizando Inteligência Artificial</Description>
                <Button>Fazer upload da imagem</Button>
            </div>
        </HomeDiv>
    )
}