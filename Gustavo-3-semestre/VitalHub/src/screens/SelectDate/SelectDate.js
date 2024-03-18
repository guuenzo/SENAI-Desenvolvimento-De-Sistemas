import { TouchableOpacity } from "react-native"
import { Button } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"
import { LinkBlue } from "../../components/LinkMedium/Style"
import InputSelect from "../../components/InputSelect/Index"
import { ContainerLabelInput, Label } from "../../components/InputTime/Style"
import CalendarComponent from "../../components/CalendarComponent/Index"
import { useState } from "react"
import { ModalConfirmSchedule } from "../ModalConfirmSchedule/Index"

export const SelectDate = ({ navigation }) => {

    const [showModalConfirmQuery, setShowModalConfirmQuery] = useState(false)

    return (
        <Container>

            <Title>Selecionar Data</Title>

            {/*Calendário*/}
            <CalendarComponent />

            <ContainerLabelInput>
                <Label>Selecione um horário disponível</Label>

                <InputSelect />
            </ContainerLabelInput>


            <Button onPress={() => setShowModalConfirmQuery(true)}><TextButton>CONFIRMAR</TextButton></Button>

            {/* MODAL */}
            <ModalConfirmSchedule
                visible={showModalConfirmQuery}
                showModalConfirmQuery={setShowModalConfirmQuery}
                navigation={navigation}
            />

            <TouchableOpacity onPress={() => navigation.navigate("Selecionar médico")}>
                <LinkBlue>Cancelar</LinkBlue>
            </TouchableOpacity>
        </Container>
    )
}