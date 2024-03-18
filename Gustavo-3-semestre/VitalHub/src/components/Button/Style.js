import styled, { css } from "styled-components";
import { TextButton } from "./TextButton/Style";

export const Button = styled.TouchableOpacity`
height: 53px;
width: 90%;
border-radius: 5px;
background-color: #496BBA;
justify-content: center;
align-items: center;
margin-bottom: 15px;
margin-top: 30px;
`

export const ButtonGray = styled(Button)`
width: 189px;
height: 53px;
background-color: #ACABB7;
`

export const ButtonGrayBig = styled(ButtonGray)`
width: 90%;
height: 53px;
`

export const ButtonModal = styled(Button)`
width: 80%;
`