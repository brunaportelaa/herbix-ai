import logoImg from '../../images/HERBIX_Logo.svg'
import { Colors, FontFamilies, FontSizes, FontWeights, TextTransform } from '../../shared/DesignTokens'
import './style.css'
import styled from 'styled-components'

const LogoImage = styled.img`
    width: 232px;
`

const LogoText = styled.p`
    font-family: ${FontFamilies.PRIMARY};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.BOLD};
    text-transform: ${TextTransform.UPPERCASE};
    font-size: ${FontSizes.FIVE};
    margin: 0;
    letter-spacing: .6rem;
`

function Logo() {
    return (
        <div>
            <LogoImage src={logoImg} alt='Logo Bitrix'/>
            <LogoText>Herbix</LogoText>
        </div>
    )
}

export default Logo;