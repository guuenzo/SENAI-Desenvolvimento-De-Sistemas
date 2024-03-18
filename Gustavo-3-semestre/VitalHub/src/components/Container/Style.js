import styled from "styled-components";

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FAFAFA;
`

export const InputLabel = styled.View`
margin-top: 24px;
height: 83px;
width: 321px;
/* border: 1px solid green; */
flex-direction: column;
justify-content: space-between;
`

export const InputLabelBig = styled(InputLabel)`
height: 150px;
`

export const InputLabelSmall = styled(InputLabel)`
width: 320px;
height: 53px;
flex-direction: row;
margin-top: 0px;
`

export const LabelContainer = styled.View`
width: 229px;
height: 24px;
align-items: baseline;
flex-direction: row;
/* border: 2px solid black; */
left: -46px;
margin-top: 24px;
`

export const ContainerWelcome = styled.TouchableOpacity`
width: 100px;
height: 41px;
/* border: 1px solid red; */
margin-left: 10px;
margin-right: 140px;
`

export const ContainerCalendar = styled.View`
width: 90%;
height: 77px;
/* border: 1px solid red; */
flex-direction: column;
justify-content: center;
margin-top: 20px;
` 

export const ContainerButtons = styled.View`
width: 90%;
height: 39px;
flex-direction: row;
justify-content: space-between;
/* border: 1px solid red; */
margin-top: 38px;
`

export const DoctorDataContainer = styled.TouchableOpacity`
padding: 1px 1px 1px 1px;
flex-direction: row;
/* justify-content: center; */
align-items: center;
`