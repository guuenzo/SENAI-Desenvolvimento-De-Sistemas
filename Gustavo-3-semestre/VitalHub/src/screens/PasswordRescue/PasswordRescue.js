import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { TextInfo } from "../../components/TextInfo/Style"
import { TextButton } from "../../components/Button/TextButton/Style"
import { Button } from "../../components/Button/Style"
import { Title } from "../../components/Title/Style"

export const PasswordRescue = ({ navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../../assets/logo.png')}
            />

            <Title>Recuperar Senha</Title>

            <TextInfo>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextInfo>

            <Input
                placeholder="Úsuario ou E-mail"
                placeholderTextColor="#34898F"
            />

            <Button onPress={() => navigation.navigate("Verifique seu e-mail")}><TextButton>CONTINUAR</TextButton></Button>
        </Container>
    )
}