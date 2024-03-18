import styled, { css } from "styled-components";
import { ContainerCardClinic } from "../CardClinic/Style";

export const ContainerCardDoctor = styled.TouchableOpacity`
width: 90%;
align-items: center;
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
        border: none; `}
`

export const DoctorImage = styled.Image`
height: 80px;
width: 75px;
border-radius: 5px;
/* border: 1px solid black; */
`

export const DoctorDataContainer = styled.View`
width: 215px;
gap: 10px;
height: 55px;
flex-direction: column;
/* border: 1px solid red; */
`

export const DoctorName = styled.Text`
font-size: 16px;
color: #33303E;
font-family: MontserratAlternates_600SemiBold;
`

export const DoctorSpecialty = styled.Text`
font-family: Quicksand_500Medium;
font-size: 14px;
color: #8C8A97;
`