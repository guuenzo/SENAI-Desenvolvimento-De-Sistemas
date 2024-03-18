import styled from "styled-components";

export const DoctorImage = styled.Image`
  width: 100%;
  height: 280px;
`;

export const DoctorName = styled.Text`
  color: #33303e;
  font-size: 20px;
  font-family: MontserratAlternates_600SemiBold;
  margin-bottom: 5px;
  margin-top: 20px;
`;

export const ContainerDoctorData = styled.View`
  padding: 1px 1px 1px 1px;
  /* border: 1px solid red; */
  flex-direction: row;
  gap: 20px;
`;

export const DoctorData = styled.Text`
  color: #5f5c6b;
  font-size: 14px;
  font-family: Quicksand_500Medium;
`;

export const LabelInputContainer = styled.View`
  padding: 1px 1px 1px 1px;
  /* border: 1px solid red; */
  gap: 7px;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  color: #33303e;
  font-size: 16px;
  font-family: Quicksand_600SemiBold;
`;

export const BoxBig = styled.View`
  border-radius: 5px;
  font-family: MontserratAlternates_500Medium;
  color: #4e4b59;
  background-color: #f5f3f3;
  width: 350px;
  height: 120px;
  text-align: left;
  /* padding-bottom: 69px; */
  padding-left: 15px;
  padding-top: 15px;
`;

export const Box = styled(BoxBig)`
  height: 55px;
  padding-bottom: 0px;
  justify-content: center;
  padding-top: 0px;
`;

export const TextBox = styled.Text`
  font-size: 14px;
  color: #4e4b59;
  font-family: MontserratAlternates_500Medium;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
`;

export const PhotoInput = styled(BoxBig)`
  justify-content: center;
  align-items: center;
`;

export const ContainerBtn = styled.View`
  padding: 1px 1px 1px 1px;
  /* border: 1px blue solid; */
  flex-direction: row;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;

export const BtnInsertPhoto = styled.TouchableOpacity`
  width: 170px;
  height: 45px;
  border-radius: 5px;
  background-color: #49b3ba;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
`;

export const TextBtnInsertPhoto = styled.Text`
  color: #ffffff;
  font-family: MontserratAlternates_700Bold;
  font-size: 14px;
`;

export const BtnCancel = styled.Text`
  color: #c81d25;
  font-size: 12px;
  font-family: MontserratAlternates_500Medium;
`;

export const Line = styled.View`
  height: 2px;
  background-color: #8c8a97;
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
`;
