import { Button } from "../../components/Button/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { TextInfo } from "../../components/TextInfo/Style"
import { Title } from "../../components/Title/Style"

export const PasswordReset = ({ navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../../assets/logo.png')}
            />

            <Title>Redefinir Senha</Title>

            <TextInfo>Insira e confirme a sua nova senha</TextInfo>

            <Input
                placeholder="Nova Senha"
                placeholderTextColor="#34898F"
            />
            <Input
                placeholder="Confirmar Nova Senha"
                placeholderTextColor="#34898F"
            />

            <Button onPress={() => navigation.navigate("Login")}><TextButton>CONFIRMAR NOVA SENHA</TextButton></Button>
        </Container>
    )
}