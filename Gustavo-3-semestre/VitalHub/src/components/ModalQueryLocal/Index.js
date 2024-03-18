import { Modal, TouchableOpacity } from "react-native";
import { Button } from "../Button/Style";
import { TextButton } from "../Button/TextButton/Style";
import { LinkBlue, LinkMedium } from "../LinkMedium/Style";
import { Title } from "../Title/Style";
import { Data, DoctorDataContainer, ModalBox, ModalView } from "./Style";
import { DoctorImageModal } from "../Images/Style";
import ImageDoctor from "../../../assets/Rectangle422doctor.png";

export const ModalQueryLocal = ({
  navigation,
  visible,
  setShowModalQueryLocal,
  setShowQueryLocal,
  ...rest
}) => {
  const Doutor = [
    {
      name: "Dr. Claudio",
      specialty: "Clínico geral",
      crm: "CRM-15286",
      image: ImageDoctor,
    },
  ];

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ModalView>
        <ModalBox>
          <DoctorImageModal source={Doutor[0].image} />

          <Title>{Doutor[0].name}</Title>

          <DoctorDataContainer>
            <Data>{Doutor[0].specialty}</Data>
            <Data>{Doutor[0].crm}</Data>
          </DoctorDataContainer>

          <Button
            onPress={() =>
              navigation.navigate("Map") || setShowModalQueryLocal(false)
            }
          >
            <TextButton>VER LOCAL DA CONSULTA</TextButton>
          </Button>

          <TouchableOpacity onPress={() => setShowModalQueryLocal(false)}>
            <LinkBlue>Cancelar</LinkBlue>
          </TouchableOpacity>
        </ModalBox>
      </ModalView>
    </Modal>
  );
};
