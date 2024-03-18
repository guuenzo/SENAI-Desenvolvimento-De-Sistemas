import { Modal, TouchableOpacity } from "react-native"
import { BoxScheduleData, ContainerScheduleData, Data, DataTitle, Title } from "./Style"
import { Button } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { LinkBlue } from "../../components/LinkMedium/Style"
import { ContainerTitle, ModalBoxContainer, ModalContainer, Subtitle } from "./Style"

export const ModalConfirmSchedule = ({ navigation, showModalConfirmQuery, visible, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <ModalContainer>

                <ModalBoxContainer>

                    <ContainerTitle>
                        <Title>Agendar Consulta</Title>

                        <Subtitle>Consulte os dados selecionados para a sua consulta</Subtitle>
                    </ContainerTitle>

                    <ContainerScheduleData>

                        <BoxScheduleData>
                            <DataTitle>Data da consulta</DataTitle>
                            <Data>1 de novembro de 2023</Data>
                        </BoxScheduleData>

                        <BoxScheduleData>
                            <DataTitle>Médico(a) da consulta</DataTitle>
                            <Data>Dra Alessandra</Data>
                            <Data>Demartologa, Esteticista</Data>
                        </BoxScheduleData>

                        <BoxScheduleData>
                            <DataTitle>Local da consulta</DataTitle>
                            <Data>São Paulo</Data>
                        </BoxScheduleData>

                        <BoxScheduleData>
                            <DataTitle>Tipo da consulta</DataTitle>
                            <Data>Rotina</Data>
                        </BoxScheduleData>

                    </ContainerScheduleData>

                    <Button onPress={() => navigation.navigate("Main")}><TextButton>CONFIRMAR</TextButton></Button>

                    <TouchableOpacity onPress={() => showModalConfirmQuery(false)}>
                        <LinkBlue>Cancelar</LinkBlue>
                    </TouchableOpacity>

                </ModalBoxContainer>

            </ModalContainer>

        </Modal>
    )
}