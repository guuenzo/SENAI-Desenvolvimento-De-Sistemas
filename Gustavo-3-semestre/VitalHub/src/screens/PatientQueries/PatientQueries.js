import { TouchableOpacity } from "react-native";
import {
  Container,
  ContainerButtons,
  ContainerCalendar,
  ContainerWelcome,
  DoctorDataContainer,
} from "../../components/Container/Style";
import { BlueGradientHeader } from "../../components/Header/Style";
import { DoctorName } from "../../components/TextAccount/Style";
import { GrayText } from "../../components/TextInfo/Style";
import { DoctorImage } from "../../components/Images/Style";
import CalendarList from "../../components/Calendar/Calendar";
import { BtnListAppointment } from "../../components/BtnListAppointment/Index";
import { useEffect, useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/Style";
import { CancelattionModal } from "../../components/CancelattionModal/CancelattionModal";
import { ModalProntuario } from "../../components/ModalProntuario/ModalProntuario";
import { ModalSchedule } from "../../components/ModalSchedule/ModalSchedule";
import { ButtonSchedule } from "../../components/ButtonSchedule/Style";
import { Icon } from "react-native-elements";
import { ModalQueryLocal } from "../../components/ModalQueryLocal/Index";
import { QueryLocal } from "../../components/QueryLocal/Index";

export const PatientQueries = ({ navigation, route }) => {
  const Consultas = [
    { id: 1, nome: "Dr. Claudio", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
  ];

  const [statusLista, setStatusLista] = useState("pendente");

  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  const [showModalSchedule, setShowModalSchedule] = useState(false);
  const [showModalQueryLocal, setShowModalQueryLocal] = useState(false);
  const [showQueryLocal, setShowQueryLocal] = useState(false);

  return (
    <Container>
      <BlueGradientHeader>
        <DoctorDataContainer onPress={() => navigation.navigate("Perfil")}>
          <DoctorImage source={require("../../../assets/Mask-group(1).png")} />
          <ContainerWelcome>
            <GrayText>Bem Vindo</GrayText>
            <DoctorName>Richard Kosta</DoctorName>
          </ContainerWelcome>
        </DoctorDataContainer>

        <TouchableOpacity>
          <Icon
            color="#FFFFFF"
            type="material"
            name="notifications"
            size={30}
          />
        </TouchableOpacity>
      </BlueGradientHeader>

      <ContainerCalendar>
        <CalendarList />
      </ContainerCalendar>

      <ContainerButtons>
        <BtnListAppointment
          textButton="Agendadas"
          onPress={() => setStatusLista("pendente")}
          clickButton={statusLista === "pendente"}
        />
        <BtnListAppointment
          textButton="Realizadas"
          onPress={() => setStatusLista("realizado")}
          clickButton={statusLista === "realizado"}
        />
        <BtnListAppointment
          textButton="Canceladas"
          onPress={() => setStatusLista("cancelado")}
          clickButton={statusLista === "cancelado"}
        />
      </ContainerButtons>

      {/* Lista */}
      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusLista == item.situacao && (
            <AppointmentCard
              onPressQueryLocal={() => setShowModalQueryLocal(true)}
              onPressAppointment={() =>
                navigation.navigate("Visualizar prescrição")
              }
              onPressCancel={() => setShowModalCancel(true)}
              situacao={item.situacao}
              nome={Consultas[0].nome}
              profileImage={require("../../../assets/Rectangle412(1).png")}
              navigation={navigation}
            />
          )
        }
        showsVerticalScrollIndicator={false}
      />

      {/* cancelar o modal */}
      <CancelattionModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      {/* ver prontuário(modal) */}
      <ModalProntuario
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />

      {/* agendar consultas(modal) */}
      <ModalSchedule
        visible={showModalSchedule}
        setShowModalSchedule={setShowModalSchedule}
        navigation={navigation}
      />

      {/*ver local da consulta(modal) */}
      <ModalQueryLocal
        setShowModalQueryLocal={setShowModalQueryLocal}
        visible={showModalQueryLocal}
        setShowQueryLocal={setShowQueryLocal}
        navigation={navigation}
      />

      {/*chamar tela de local da clinica */}
      <QueryLocal visible={showQueryLocal} />

      <ButtonSchedule onPress={() => setShowModalSchedule(true)}>
        <Icon
          type="font-awesome"
          color="#FFFFFF"
          size={32}
          name="stethoscope"
        />
      </ButtonSchedule>
    </Container>
  );
};
