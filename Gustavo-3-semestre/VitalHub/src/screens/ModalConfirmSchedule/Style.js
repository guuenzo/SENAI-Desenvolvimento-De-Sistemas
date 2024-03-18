import styled from "styled-components";

export const ModalContainer = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.60);
`

export const ModalBoxContainer = styled.View`
padding: 30px 30px 10px;
width: 90%;
border-radius: 10px;
background-color: white;
align-items: center;
`

export const ContainerTitle = styled.View`
height: 90px;
width: 280px;
/* border: 1px solid red; */
justify-content: center;
align-items: center;
gap: 16px;
`

export const Title = styled.Text`
font-size: 20px;
color: #33303E;
font-family: MontserratAlternates_600SemiBold;
`

export const Subtitle = styled.Text`
color: #000000;
font-size: 16px;
text-align: center;
font-family: Quicksand_500Medium;
`

export const BoxScheduleData = styled.View`
gap: 3px 3px 3px 3px;
/* border: 1px solid red; */
flex-direction: column;
gap: 8px;
`

export const DataTitle = styled.Text`
font-size: 16px;
color: #33303E;
font-family: Quicksand_600SemiBold;
`

export const Data = styled.Text`
color: #4E4B59;
font-family: Quicksand_500Medium;
font-size: 14px;
`

export const ContainerScheduleData = styled.View`
width: 100%;
gap: 20px;
justify-content: flex-start;
margin-top: 30px;
`