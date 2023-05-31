import { BorderRadiuses, Colors, FontFamilies, FontSizes, FontWeights, Spaces, TextTransform } from '../../shared/DesignTokens'
import styled from 'styled-components'


export const Button = styled.button`
    max-width: 340px;
    background-color: ${Colors.NEUTRAL_WHITE};
    font-family: ${FontFamilies.PRIMARY};
    text-transform: ${TextTransform.UPPERCASE};
    padding: ${Spaces.ONE_HALF} ${Spaces.SIX};
    border-radius: ${BorderRadiuses.TWO};
    font-weight: ${FontWeights.BOLD};
    font-size: ${FontSizes.TWO};
    border: none;

`