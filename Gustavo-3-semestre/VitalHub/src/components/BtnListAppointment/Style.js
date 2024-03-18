import styled, { css } from "styled-components";


export const ButtonTabsStyle = styled.TouchableHighlight`
    width: 100px;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    ${props => props.clickButton ?
        css`
    background-color: #496bba`
        : css`
    background-color: transparent;
    border: 2px solid #607ec5;`}
`

export const ButtonTextStyle = styled.Text`
    font-size: 12px;
    font-family: "MontserratAlternates_600SemiBold";
    
    ${props => props.clickButton ?
        css`
    color: #fbfbfb;`
        : css`
   color: #607ec5;`}
    
`