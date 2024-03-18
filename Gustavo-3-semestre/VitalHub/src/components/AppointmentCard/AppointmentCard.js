import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./Style";
import { useState } from "react";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
  onPressQueryLocal,
  nome,
  navigation,
  profileImage = ProfileImage,
}) => {
  const [profile, setProfile] = useState("Paciente");

  return (
    <ContainerCardList onPress={onPressQueryLocal}>
      <ProfileImage source={profileImage} />

      <ContentCard>
        <DataProfileCard>
          <ProfileName>{nome}</ProfileName>

          <ProfileData>
            <TextAge>22 anos</TextAge>

            <TextBold>Rotina</TextBold>
          </ProfileData>
        </DataProfileCard>

        <ViewRow>
          <ClockCard situacao={situacao}>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />

            <TextBold situacao={situacao} color={"#49B3BA"}>
              14:00
            </TextBold>
          </ClockCard>

          {/* valida e mostra o tipo de botão conforme a situação da consulta */}

          {situacao == "cancelado" ? (
            <></>
          ) : situacao == "pendente" ? (
            <ButtonCard onPress={onPressCancel}>
              <ButtonText situacao={situacao}>Cancelar</ButtonText>
            </ButtonCard>
          ) : (
            <ButtonCard
              onPress={
                profile !== "Paciente"
                  ? onPressAppointment
                  : () => navigation.navigate("Visualizar prescrição")
              }
            >
              <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
            </ButtonCard>
          )}
        </ViewRow>
      </ContentCard>
    </ContainerCardList>
  );
};
