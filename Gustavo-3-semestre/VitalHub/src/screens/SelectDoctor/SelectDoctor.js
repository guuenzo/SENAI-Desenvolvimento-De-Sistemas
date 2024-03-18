import { Title } from "../../components/Title/Style"
import { Container } from "../../components/Container/Style"
import { CardDoctor } from "../../components/CardDoctor/CardDoctor"
import { Button } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { TouchableOpacity } from "react-native"
import { LinkBlue } from "../../components/LinkMedium/Style"
import { useState } from "react"
import DoctorImage from "../../../assets/Rectangle414.png"

export const SelectDoctor = ({ navigation }) => {
    const [isSelected, setIsSelected] = useState("")

    const Doutores = [
        { nome: "Dra Alessandra", especialidade: "Demartologia, Esteticista" },
        { nome: "Dr Kumushiro", especialidade: "Cirurgião, Cardiologista" },
        { nome: "Dr Rodrigo Santos", especialidade: "Clínico, Pediatra" },
    ]

    return (
        <Container>

            <Title>Selecionar Médico</Title>

            <CardDoctor
                onPress={() => setIsSelected("1")}
                clickButton={isSelected === "1"}
                name={Doutores[0].nome}
                specialty={Doutores[0].especialidade}
                image={DoctorImage}
            />
            <CardDoctor
                onPress={() => setIsSelected("2")}
                clickButton={isSelected === "2"}
                name={Doutores[1].nome}
                specialty={Doutores[1].especialidade}
                image={DoctorImage}
            />
            <CardDoctor
                onPress={() => setIsSelected("3")}
                clickButton={isSelected === "3"}
                name={Doutores[2].nome}
                specialty={Doutores[2].especialidade}
                image={DoctorImage}
            />

            <Button onPress={() => navigation.navigate("Selecionar data")}><TextButton>CONFIRMAR</TextButton></Button>

            <TouchableOpacity onPress={() => navigation.navigate("Selecionar clínica")}>
                <LinkBlue>Cancelar</LinkBlue>
            </TouchableOpacity>
        </Container>
    )
}