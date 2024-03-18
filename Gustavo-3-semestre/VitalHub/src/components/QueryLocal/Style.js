import styled from "styled-components";

export const Modal = styled.Modal`
  flex: 1;
`;

export const MapImage = styled.Image`
  /* height: 500px; */
  width: 100%;
`;

export const ModalQueryLocalData = styled.View`
  padding: 30px 30px 20px 20px;
  height: 50%;
  background-color: white;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const ContainerClinicData = styled.View`
  padding: 1px 1px 1px 1px;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const ClinicName = styled.Text`
  color: #000000;
  font-size: 20px;
  font-family: MontserratAlternates_600SemiBold;
`;

export const ClinicLocal = styled.Text`
  font-family: MontserratAlternates_600SemiBold;
  font-size: 14px;
  color: #4e4b59;
`;

export const ContainerInputLabel = styled.View`
  padding: 1px 1px 1px 1px;
  /* border: 1px solid red; */
  justify-content: center;
  margin-top: 30px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: Quicksand_600SemiBold;
  color: #33303e;
`;

export const Input = styled.TextInput`
  font-family: MontserratAlternates_500Medium;
  padding-left: 15px;
  border-radius: 5px;
  height: 55px;
  width: 100%;
  background-color: #f5f3f3;
`;

export const ContainerInputLabelFlex = styled.View`
  padding: 1px 1px 1px 1px;
  flex-direction: row;
  gap: 45px;
  /* border: 1px solid green; */
  margin-top: 30px;
`;

export const InputLittle = styled(Input)`
  width: 145px;
`;
