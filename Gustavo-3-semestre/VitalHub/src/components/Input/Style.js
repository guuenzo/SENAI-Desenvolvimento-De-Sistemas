import styled from "styled-components";

export const Input = styled.TextInput`
height: 53px;
width: 90%;
border-width: 2px solid;
border-color: #49B3BA;
border-radius: 5px;
font-size: 14px;
font-family: MontserratAlternates_600SemiBold;
padding: 15px;
margin-bottom: 15px;
`
export const ProfileInput = styled(Input)`
width: 100%;
border: none;
border-radius: 5px;
background-color: #F5F3F3;
font-family: MontserratAlternates_500Medium;
`

export const InputBig = styled(ProfileInput)`
border: 2px solid #49B3BA;
height: 121px;
margin-top: 10px;
background-color: none;
`

export const Input2 = styled(InputBig)`
height: 53px;
`

export const ProfileInputSmall = styled(ProfileInput)`
width: 144px;
`

export const NumbersBox = styled(Input)`
height: 62px;
width: 65px;
border: 2px solid #77CACF;
`