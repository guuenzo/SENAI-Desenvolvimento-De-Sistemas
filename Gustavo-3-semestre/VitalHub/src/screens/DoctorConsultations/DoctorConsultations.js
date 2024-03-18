import { Image, ImageBackground, Text, TouchableOpacity } from "react-native"
import { Container, ContainerButtons, ContainerCalendar, ContainerWelcome, PatientBox, PatientContainer, TimeContainer } from "../../components/Container/Style"
import { BlueGradientHeader } from "../../components/Header/Style"
import { DoctorName, Nickname } from "../../components/TextAccount/Style"
import { Days, DaysNumber, GrayText } from "../../components/TextInfo/Style"
import { Icon } from "react-native-elements"
import { DoctorImage } from "../../components/Images/Style"
import { Title, TitleCalendar } from "../../components/Title/Style"
import { Circle } from "../../components/ImageBackground/Style"
import CalendarList from "../../components/Calendar/Calendar"
import { ButtonSmall, ButtonSmallWhite } from "../../components/Button/Style"
import { TextButtonSmall, TextButtonSmallBlue } from "../../components/Button/TextButton/Style"
import { Cancel } from "../../components/LinkMedium/Style"
import { BtnListAppointment } from "../../components/BtnListAppointment/Index"
import { useState } from "react"
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"
import { ListComponent } from "../../components/List/Style"
import { CancelattionModal } from "../../components/CancelattionModal/CancelattionModal"
import { ModalProntuario } from "../../components/ModalProntuario/ModalProntuario"

export const DoctorConsultations = ({ navigation }) => {
    const Consultas = [
        { id: 1, nome: "Nicole Sarga", situacao: "pendente" },
        { id: 2, nome: "Carlos", situacao: "realizado" },
        { id: 3, nome: "Carlos", situacao: "cancelado" },
        { id: 4, nome: "Carlos", situacao: "realizado" },
        { id: 5, nome: "Carlos", situacao: "cancelado" },

    ];

    const [statusLista, setStatusLista] = useState("pendente");

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);

    function navigate() {
        navigation.navigate("Perfil")
    }

    return (
        <Container>
            <BlueGradientHeader>
                <TouchableOpacity onPress={navigate}>
                    <DoctorImage source={require('../../../assets/Mask-group.png')}
                    />
                </TouchableOpacity>
                <ContainerWelcome onPress={navigate}>
                    <GrayText>Bem Vindo</GrayText>
                    <DoctorName>Dr. Claudio</DoctorName>
                </ContainerWelcome>

                <TouchableOpacity>
                    <Icon
                        color='#FFFFFF'
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
                    textButton='Agendadas'
                    onPress={() => setStatusLista("pendente")}
                    clickButton={statusLista === "pendente"}
                />
                <BtnListAppointment
                    textButton='Realizadas'
                    onPress={() => setStatusLista("realizado")}
                    clickButton={statusLista === "realizado"}
                />
                <BtnListAppointment
                    textButton='Canceladas'
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
                            onPressAppointment={() => setShowModalAppointment(true)}
                            onPressCancel={() => setShowModalCancel(true)}
                            situacao={item.situacao}
                            nome={Consultas[0].nome}
                            profileImage={require('../../../assets/Rectangle412.png')}
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
                navigation={navigation}
            />

        </Container>
    )
}