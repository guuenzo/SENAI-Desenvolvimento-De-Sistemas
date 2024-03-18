import { Text } from "react-native"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"
import { Logo } from "../../components/Logo/Style"
import { TextEmail, TextInfo } from "../../components/TextInfo/Style"
import { ContainerNumbers } from "../../components/ContainerNumbers/Style"
import { NumbersBox } from "../../components/Input/Style"
import { Numbers } from "../../components/Numbers/Style"
import { Button } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { LinkBlue } from "../../components/LinkMedium/Style"

export const EmailVerify = ({ navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../../assets/logo.png')}
            />

            <Title>Verifique seu e-mail</Title>

            <TextInfo>Digite o código de 4 dígitos enviados para <TextEmail>username@email.com</TextEmail></TextInfo>

            <ContainerNumbers>
                <NumbersBox><Numbers>0</Numbers></NumbersBox>
                <NumbersBox><Numbers>0</Numbers></NumbersBox>
                <NumbersBox><Numbers>0</Numbers></NumbersBox>
                <NumbersBox><Numbers>0</Numbers></NumbersBox>
            </ContainerNumbers>

            <Button onPress={() => navigation.navigate("Redefinir Senha")}>
                <TextButton onPress={() => navigation.navigate("Redefinir Senha")}>ENTRAR</TextButton>
            </Button>

            <LinkBlue>Reenviar Código</LinkBlue>
        </Container>
    )
}