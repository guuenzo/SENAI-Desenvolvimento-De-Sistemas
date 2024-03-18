import { Modal, TouchableOpacity } from "react-native"
import { Title } from "../Title/Style"
import { TextButton } from "../Button/TextButton/Style"
import { LinkBlue } from "../LinkMedium/Style"
import { ModalScheduleQuery, ModalTransparent, QueryOptions, QueryOptionsContainer, QueryQuestions, Question, QuestionContainer, TextOption, QueryInput, ButtonConfirmSchedule } from "./Style"


export const ModalSchedule = ({ visible, setShowModalSchedule, navigation, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} animationType="fade" transparent={true}>

            <ModalTransparent>
                <ModalScheduleQuery>

                    <Title>Agendar Consulta</Title>

                    <QueryQuestions>

                        <QuestionContainer>
                            <Question>Qual o nível da consulta</Question>
                        </QuestionContainer>

                        <QueryOptionsContainer>
                            <TouchableOpacity>
                                <QueryOptions><TextOption>Rotina</TextOption></QueryOptions>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <QueryOptions><TextOption>Exame</TextOption></QueryOptions>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <QueryOptions><TextOption>Urgência</TextOption></QueryOptions>
                            </TouchableOpacity>


                        </QueryOptionsContainer>

                    </QueryQuestions>

                    <QueryQuestions>

                        <QuestionContainer>
                            <Question>Informe a localização desejada</Question>
                        </QuestionContainer>

                        <QueryInput
                            placeholder="Informe a localização"
                            placeholderTextColor='#34898F'
                        />

                    </QueryQuestions>


                    <ButtonConfirmSchedule onPress={() => navigation.navigate("Selecionar clínica") || setShowModalSchedule(false)}><TextButton>CONTINUAR</TextButton></ButtonConfirmSchedule>

                    <TouchableOpacity onPress={() => setShowModalSchedule(false)}>
                        <LinkBlue>Cancelar</LinkBlue>
                    </TouchableOpacity>

                </ModalScheduleQuery>
            </ModalTransparent>
        </Modal>
    )
}