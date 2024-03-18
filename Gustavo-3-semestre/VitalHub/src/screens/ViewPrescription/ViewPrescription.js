import { Container } from "../../components/Container/Style";
import doctorImage from "../../../assets/A.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ContainerDoctorData,
  DoctorData,
  DoctorImage,
  DoctorName,
  Box,
  BoxBig,
  Label,
  LabelInputContainer,
  TextBox,
  PhotoInput,
  ContainerBtn,
  BtnInsertPhoto,
  TextBtnInsertPhoto,
  BtnCancel,
  Line,
} from "./Style";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LinkBlue } from "../../components/LinkMedium/Style";
import { CameraModal } from "../Camera/Camera";
import { useState } from "react";

export const ViewPrescription = ({ navigation }) => {
  const prescrição = {
    descricao: `Medicamento: Advil
Dosagem: 50 mg
Frequência: 3 vezes ao dia
Duração: 3 dias
`,
    resultadoExame: `Resultado do exame de sangue : 
tudo normal`,
  };

  const [showCamera, setShowCamera] = useState(false);

  const [photoPrescription, setphotoPrescription] = useState(null);

  return (
    <ScrollView>
      <Container>
        <DoctorImage source={doctorImage} />

        <DoctorName>Dr. Claudio</DoctorName>

        <ContainerDoctorData>
          <DoctorData>Clínico geral</DoctorData>
          <DoctorData>CRM-15286</DoctorData>
        </ContainerDoctorData>

        <LabelInputContainer>
          <Label>Descrição da consulta</Label>
          <BoxBig>
            <TextBox>
              O paciente possuí uma infecção no ouvido. Necessário repouse de 2
              dias e acompanhamento médico constante
            </TextBox>
          </BoxBig>
        </LabelInputContainer>

        <LabelInputContainer>
          <Label>Diagnóstico do paciente</Label>
          <Box>
            <TextBox>Infecção no ouvido</TextBox>
          </Box>
        </LabelInputContainer>

        <LabelInputContainer>
          <Label>Prescrição médica</Label>
          <BoxBig>
            <TextBox>{prescrição.descricao}</TextBox>
          </BoxBig>
        </LabelInputContainer>

        <LabelInputContainer>
          <Label>Exames médicos</Label>
          <PhotoInput>
            <TextBox>Nenhuma foto informada</TextBox>
            <Image style={styles.imageStyle} source={{ uri: photoPrescription }} />
          </PhotoInput>
        </LabelInputContainer>

        <ContainerBtn>
          <BtnInsertPhoto onPress={() => setShowCamera(true)}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={24}
              color="#FBFBFB"
            />
            <TextBtnInsertPhoto>Enviar</TextBtnInsertPhoto>
          </BtnInsertPhoto>

          <TouchableOpacity>
            <BtnCancel>Cancelar</BtnCancel>
          </TouchableOpacity>
        </ContainerBtn>

        <Line />

        <BoxBig>
          <TextBox>{prescrição.resultadoExame}</TextBox>
        </BoxBig>

        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <LinkBlue>Voltar</LinkBlue>
        </TouchableOpacity>

        <CameraModal
          visible={showCamera}
          setShowCamera={setShowCamera}
          setphotoPrescription={setphotoPrescription}
        />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 110,
    width: "90%",
  },
});
