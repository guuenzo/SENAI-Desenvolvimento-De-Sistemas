import { ScrollView } from "react-native"
import { Container, InputLabel, InputLabelSmall, LabelContainer, Scrool } from "../../components/Container/Style"
import { ContentProfile } from "../../components/ContentProfile/Style"
import { UserLog } from "../../components/Logo/Style"
import { Nickname } from "../../components/TextAccount/Style"
import { UserEmail } from "../../components/TextInfo/Style"
import { LabelProfile, LabelProfile2 } from "../../components/Label/Style"
import { ProfileInput, ProfileInputSmall } from "../../components/Input/Style"
import { Button, ButtonGray } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"

export const Profile = () => {
    return (
        <ScrollView>
            <Container>
                <UserLog source={require('../../../assets/Rectangle425.png')} width={'100%'} />

                <Nickname>Richard Kosta</Nickname>
                <UserEmail>richard.costa@gmail.com</UserEmail>

                <InputLabel>
                    <LabelProfile>Data de nascimento:</LabelProfile>
                    <ProfileInput
                    />
                </InputLabel>

                <InputLabel>
                    <LabelProfile>CPF</LabelProfile>
                    <ProfileInput
                    // placeholder="859*******"
                    // placeholderTextColor="#33303E"
                    />
                </InputLabel>

                <InputLabel>
                    <LabelProfile>Endereço</LabelProfile>
                    <ProfileInput
                    // placeholder="Rua Vicenso Silva, 987"
                    // placeholderTextColor="#33303E"
                    />
                </InputLabel>

                <LabelContainer>
                    <LabelProfile2>Cep</LabelProfile2>
                    <LabelProfile>Cidade</LabelProfile>
                </LabelContainer>

                <InputLabelSmall>
                    <ProfileInputSmall
                    // placeholder="06548-909"
                    // // placeholderTextColor="#33303E"
                    />
                    <ProfileInputSmall
                    // placeholder="Moema-SP"
                    // placeholderTextColor="#33303E"
                    />
                </InputLabelSmall>

                <Button><TextButton>SALVAR</TextButton></Button>

                <Button><TextButton>EDITAR</TextButton></Button>

                <ButtonGray><TextButton>SAIR DO APP</TextButton></ButtonGray>
            </Container>
        </ScrollView>
    )
}