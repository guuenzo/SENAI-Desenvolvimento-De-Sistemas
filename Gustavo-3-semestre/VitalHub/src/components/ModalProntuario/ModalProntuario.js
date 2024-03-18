import { Modal, TouchableOpacity } from "react-native"
import { ModalContent, ModalText, PatientModal } from "../CancelattionModal/Style"
import { ModalData, ModalProfileImage, ModalUserData } from "./Style"
import { Title } from "../Title/Style"
import { ButtonModal } from "../Button/Style"
import { TextButton } from "../Button/TextButton/Style"
import { LinkBlue } from "../LinkMedium/Style"

export const ModalProntuario = ({ navigation, setShowModalAppointment, visible, ...rest }) => {

    function navegar() {
        navigation.navigate("Inserir prontuario")

        setShowModalAppointment(false)
    }

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>

                <ModalContent>

                    <ModalProfileImage source={require('../../../assets/Rectangle422.png')} />

                    <Title>Nicole Sarga</Title>

                    <ModalUserData>

                        <ModalData>22 anos</ModalData>

                        <ModalData>nicole.sarga@gmail.com</ModalData>

                    </ModalUserData>

                    <ButtonModal onPress={navegar}><TextButton>INSERIR PRONTUÁRIO</TextButton></ButtonModal>

                    <TouchableOpacity onPress={() => setShowModalAppointment(false)}>
                        <LinkBlue>Cancelar</LinkBlue>
                    </TouchableOpacity>
                </ModalContent>

            </PatientModal>

        </Modal>
    )
}