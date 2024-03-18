import styled, { css } from "styled-components";

export const ContainerCardClinic = styled.TouchableOpacity`
width: 90%;
margin: 0px auto;
margin-bottom: 12px;
padding: 10px;
border-radius: 5px;
flex-direction: row;
gap: 10px;
background-color: #ffffff;
box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.18);

${props => props.clickButton ?
        css`
    border: 2px solid #496BBA`
        : css`
        border: none;`}
`

export const ContainerClinicData = styled.View`
height: 50px;
width: 210px;
/* border: 1px solid red; */
gap: 10px;
flex-direction: column;
`

export const ClinicName = styled.Text`
font-size: 16px;
color: #33303E;
font-family: MontserratAlternates_600SemiBold;
`

export const ClinicLocal = styled.Text`
font-size: 14px;
color: #4E4B59;
font-family: Quicksand_600SemiBold;
`

export const ClinicRateContainer = styled.View`
width: 45px;
height: 20px;
/* border: 1px solid black; */
flex-direction: row;
align-items: center;
justify-content: center;
left: 100%;
`

export const ClinicRate = styled(ClinicLocal)`
color: #F9A620;
/* background-color: black; */
`

export const ClinicOperationContainer = styled.View`
width: 100px;
height: 25px;
background-color: #E8FCFD;
border-radius: 5px;
flex-direction: row;
align-items: center;
justify-content: center;
bottom: -7px;
gap: 8px;
`

export const ClinicOperation = styled(ClinicLocal)`
color: #49B3BA;
`

export const ContainerBox = styled.View`
width: 100px;
height: 55px;
/* border: 1px solid green; */
`