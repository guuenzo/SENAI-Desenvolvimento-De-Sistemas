import { Modal, TouchableOpacity } from "react-native";
import { Title } from "../Title/Style";
import { ButtonText } from "../AppointmentCard/Style";
import { LinkBlue } from "../LinkMedium/Style";
import { ModalContent, ModalText, PatientModal } from "./Style";
import { ButtonModal } from "../Button/Style";
import { TextButton } from "../Button/TextButton/Style";

import * as Notifications from "expo-notifications";

//solicita permissoes de notificacao ao iniciar o app
Notifications.requestPermissionsAsync();

//define como as notificacoes devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //mostrar o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //produz som ao receber notificacao
    shouldPlaySound: true,

    //numero de notificacoes no icone do app
    shouldSetBadge: false,
  }),
});

export const CancelattionModal = ({ visible, setShowModalCancel, ...rest }) => {
  const handleCallNotifications = async () => {
    //obtem o status da permissao
    const { status } = await Notifications.getPermissionsAsync();

    //verifica se o usuario concedeu a permissao
    if (status !== "granted") {
      alert("você não deixou as notificações ativas");
      return;
    }
    //agenda um notificacao
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "CONSULTA",
        body: "Consulta cancelada",
        sound: "",
        vibrate: true,
      },
      trigger: null,
    });
    setShowModalCancel(false);
  };

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar Consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <ButtonModal onPress={handleCallNotifications}>
            <TextButton>CONFIRMAR</TextButton>
          </ButtonModal>

          <TouchableOpacity onPress={() => setShowModalCancel(false)}>
            <LinkBlue>Cancelar</LinkBlue>
          </TouchableOpacity>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
