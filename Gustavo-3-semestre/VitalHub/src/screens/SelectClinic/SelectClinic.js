import { TouchableOpacity } from "react-native"
import { Button } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { Container } from "../../components/Container/Style"
import { LinkBlue } from "../../components/LinkMedium/Style"
import { Title } from "../../components/Title/Style"
import { CardClinic } from "../../components/CardClinic/CardClinic"
import { useState } from "react"
import { ModalSchedule } from "../../components/ModalSchedule/ModalSchedule"

export const SelectClinic = ({ navigation, setShowModalSchedule }) => {

    // const teste = () => {
    //     // navegar pra main
    //     navigation.navigate("Selecionar médico")

    //     return (
    //         //abrir o modal
    //         <ModalSchedule
    //             setShowModalSchedule={setShowModalSchedule}
    //         />
    //     )
    //}
    const Clinicas = [
        { nome: "Clínica Natureh", local: "São Paulo, SP", avaliacao: "4,5", funcionamento: "Seg-Sex" },
        { nome: "Diamond Pró-Mulher", local: "São Paulo, SP", avaliacao: "4,8", funcionamento: "Seg-Sex" },
        { nome: "Clinica Villa Lobos", local: "Taboão, SP", avaliacao: "4,2", funcionamento: "Seg-Sab" },
        { nome: "SP Oncologia Clínica", local: "Taboão, SP", avaliacao: "4,2", funcionamento: "Seg-Sab" }
    ]

    const [isSelected, setIsSelected] = useState("");

    return (
        <Container>

            <Title>Selecionar Clínica</Title>

            <CardClinic
                name={Clinicas[0].nome}
                local={Clinicas[0].local}
                rate={Clinicas[0].avaliacao}
                operation={Clinicas[0].funcionamento}
                onPress={() => setIsSelected("1")}
                clickButton={isSelected === "1"}
            />
            <CardClinic
                name={Clinicas[1].nome}
                local={Clinicas[1].local}
                rate={Clinicas[1].avaliacao}
                operation={Clinicas[1].funcionamento}
                onPress={() => setIsSelected("2")}
                clickButton={isSelected === "2"}
            />
            <CardClinic
                name={Clinicas[2].nome}
                local={Clinicas[2].local}
                rate={Clinicas[2].avaliacao}
                operation={Clinicas[2].funcionamento}
                onPress={() => setIsSelected("3")}
                clickButton={isSelected === "3"}
            />
            <CardClinic
                name={Clinicas[3].nome}
                local={Clinicas[3].local}
                rate={Clinicas[3].avaliacao}
                operation={Clinicas[3].funcionamento}
                onPress={() => setIsSelected("4")}
                clickButton={isSelected === "4"}
            />


            <Button onPress={() => navigation.navigate("Selecionar médico")}><TextButton>CONFIRMAR</TextButton></Button>

            <TouchableOpacity onPress={() => navigation.navigate("Main", { previousRoute: true })}>
                <LinkBlue>Cancelar</LinkBlue>
            </TouchableOpacity>
        </Container>
    )
}

