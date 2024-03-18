import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"
import { Logo } from "../../components/Logo/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/LinkMedium/Style"
import { Button } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { ButtonGoogle } from "../../components/ButtonGoogle/Style"
import { ButtonTextGoogle } from "../../components/ButtonGoogle/ButtonTextGoogle/Style"
import { ContentAccount } from "../../components/ContentAccount/Style"
import { TextAccount, TextAccountLink } from "../../components/TextAccount/Style"
import { Icon } from "react-native-elements/dist/icons/Icon"
import { TouchableOpacity } from "react-native"

export const Login = ({ navigation }) => {

    async function Login() {
        navigation.replace("Main")
    }

    return (
        <Container>
            <Logo
                source={require('../../../assets/logo.png')}
            />
            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuário ou E-mail"
                placeholderTextColor="#34898F"
            />

            <Input
                placeholder="Senha"
                placeholderTextColor="#34898F"
            />

            <TouchableOpacity onPress={() => navigation.navigate("Recuperar senha")}>
                <LinkMedium>Esqueceu a senha?</LinkMedium>
            </TouchableOpacity>

            <Button onPress={(e) => Login()}><TextButton>ENTRAR</TextButton></Button>

            <ButtonGoogle>
                <Icon
                    color='#496BBA'
                    type="antdesign"
                    name="google" />
                <ButtonTextGoogle>ENTRAR COM GOOGLE</ButtonTextGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? </TextAccount>
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <TextAccountLink>Crie uma conta agora!</TextAccountLink>
                </TouchableOpacity>
            </ContentAccount>
        </Container>
    )
}