import { ScrollView, TouchableOpacity } from 'react-native'
import { Container, InputLabel } from "../../components/Container/Style"
import { UserLog } from "../../components/Logo/Style"
import { Nickname } from "../../components/TextAccount/Style"
import { UserEmail } from "../../components/TextInfo/Style"
import { InputLabelBig } from '../../components/Container/Style'
import { LabelProfile } from "../../components/Label/Style"
import { Button, ButtonGrayBig } from "../../components/Button/Style"
import { TextButton } from '../../components/Button/TextButton/Style'
import { LinkBlue } from "../../components/LinkMedium/Style"
import { InputBig, Input2 } from "../../components/Input/Style"

export const MedicalRecordInsert = ({ navigation }) => {
    return (
        <ScrollView>
            <Container>
                <UserLog source={require('../../../assets/Rectangle425.png')} width={'100%'} />

                <Nickname>Richard Kosta</Nickname>
                <UserEmail><UserEmail>22 anos |</UserEmail>| richard.costa@gmail.com</UserEmail>

                <InputLabelBig>
                    <LabelProfile>Descrição da consulta</LabelProfile>
                    <InputBig
                        placeholder="Descrição"
                        style={{ textAlignVertical: 'top' }}
                        placeholderTextColor="#34898F"
                    />
                </InputLabelBig>

                <InputLabel>
                    <LabelProfile>Diagnóstico do paciente</LabelProfile>
                    <Input2
                        placeholder="Diagnóstico"
                        placeholderTextColor="#34898F"
                    />
                </InputLabel>

                <InputLabelBig>
                    <LabelProfile>Prescrição médica</LabelProfile>
                    <InputBig
                        placeholder="Prescrição Médica"
                        placeholderTextColor="#34898F"
                    />
                </InputLabelBig>

                <Button><TextButton>SALVAR</TextButton></Button>

                <ButtonGrayBig><TextButton>EDITAR</TextButton></ButtonGrayBig>

                <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                    <LinkBlue>Cancelar</LinkBlue>
                </TouchableOpacity>
            </Container>
        </ScrollView>
    )
}