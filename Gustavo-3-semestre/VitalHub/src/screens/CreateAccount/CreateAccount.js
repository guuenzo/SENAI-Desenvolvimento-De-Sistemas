import { TouchableOpacity } from "react-native"
import { Button } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkBlue } from "../../components/LinkMedium/Style"
import { Logo } from "../../components/Logo/Style"
import { TextInfo } from "../../components/TextInfo/Style"
import { Title } from "../../components/Title/Style"

export const CreateAccount = ({ navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../../assets/logo.png')}
            />

            <Title>Criar conta</Title>

            <TextInfo>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextInfo>

            <Input
                placeholder="Usuário ou E-mail"
                placeholderTextColor="#34898F" />
            <Input
                placeholder="Senha"
                placeholderTextColor="#34898F"
            />
            <Input
                placeholder="Confirmar Senha"
                placeholderTextColor="#34898F"
            />

            <Button onPress={() => navigation.navigate("Login")}><TextButton>CADASTRAR</TextButton></Button>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <LinkBlue>Cancelar</LinkBlue>
            </TouchableOpacity>
        </Container>
    )
}