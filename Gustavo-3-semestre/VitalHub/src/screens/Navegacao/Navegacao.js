import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Criar conta"
                onPress={() => navigation.navigate("Criar Conta")}
            />
            <Button
                title="Recuperar Senha"
                onPress={() => navigation.navigate("Recuperar Senha")}
            />
            <Button
                title="Redefinir Senha"
                onPress={() => navigation.navigate("Redefinir Senha")}
            />
            <Button
                title="Verifique seu Email"
                onPress={() => navigation.navigate("Verifique seu Email")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />
            <Button
                title="Inserção Prontuário"
                onPress={() => navigation.navigate("Inserção Prontuário")}
            />
            <Button
                title="Médico Consultas"
                onPress={() => navigation.navigate("Médico Consultas")}
            />
            <Button
                title="Paciente Consultas"
                onPress={() => navigation.navigate("Paciente Consultas")}
            />
            <Button
                title="Selecionar Clínica"
                onPress={() => navigation.navigate("Selecionar Clínica")}
            />
            <Button
                title="Selecionar Médico"
                onPress={() => navigation.navigate("Selecionar Médico")}
            />
            <Button
                title="Selecionar Data"
                onPress={() => navigation.navigate("Selecionar Data")}
            />
            <Button
                title="Visualizar Prescrição"
                onPress={() => navigation.navigate("Visualizar Prescrição")}
            />
        </View>
    )
}