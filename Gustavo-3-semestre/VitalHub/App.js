import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_400Regular,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import { PasswordRescue } from "./src/screens/PasswordRescue/PasswordRescue";
import { PasswordReset } from "./src/screens/PasswordReset/PasswordReset";
import { EmailVerify } from "./src/screens/EmailVerify/EmailVerify";
import { Profile } from "./src/screens/Profile/Profile";
import { MedicalRecordInsert } from "./src/screens/MedicalRecordInsert/MedicalRecordInsert";
import { DoctorConsultations } from "./src/screens/DoctorConsultations/DoctorConsultations";
import { PatientQueries } from "./src/screens/PatientQueries/PatientQueries";
import { SelectClinic } from "./src/screens/SelectClinic/SelectClinic";
import { SelectDoctor } from "./src/screens/SelectDoctor/SelectDoctor";
import { SelectDate } from "./src/screens/SelectDate/SelectDate";
import { ViewPrescription } from "./src/screens/ViewPrescription/ViewPrescription";
import { Main } from "./src/screens/Main/Main";
import { Map } from "./src/components/Map/Index";
import { QueryLocal } from "./src/components/QueryLocal/Index";
import { Camera, CameraScreen } from "./src/screens/Camera/Camera";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [role] = useState("Paciente");

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_400Regular,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //Container - envolve toda a estrutura de navegação
    //Navigator - componente para a navegação
    //Screen - tela
    //name: nome da tela
    //component: componente que será chamado/renderizado
    //options: título da tela

    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Navegacao"
          component={Navegacao}

        /> */}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="Cadastro"
          component={CreateAccount}
          options={{ title: "Cadastro" }}
        />

        <Stack.Screen
          name="Perfil"
          component={Profile}
          options={{ title: "Perfil" }}
        />

        <Stack.Screen
          name="Recuperar senha"
          component={PasswordRescue}
          options={{ title: "Recuperar senha" }}
        />

        <Stack.Screen
          name="Verifique seu e-mail"
          component={EmailVerify}
          options={{ title: "Verifique seu e-mail" }}
        />

        <Stack.Screen
          name="Redefinir Senha"
          component={PasswordReset}
          options={{ title: "Redefinir Senha" }}
        />

        <Stack.Screen
          name="Selecionar clínica"
          component={SelectClinic}
          options={{ title: "Redefinir Senha" }}
        />

        <Stack.Screen
          name="Selecionar médico"
          component={SelectDoctor}
          options={{ title: "Selecionar médico" }}
        />

        <Stack.Screen
          name="Selecionar data"
          component={SelectDate}
          options={{ title: "Selecionar data" }}
        />

        <Stack.Screen
          name="Visualizar prescrição"
          component={ViewPrescription}
          options={{ title: "Visualizar prescrição" }}
        />

        <Stack.Screen
          name="Inserir prontuario"
          component={MedicalRecordInsert}
          options={{ title: "Inserir prontuario" }}
        />

        <Stack.Screen
          name="Map"
          component={QueryLocal}
          options={{ title: "Map" }}
        />

        {/* <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: "Camera" }}
        /> */}

        <Stack.Screen
          name="Main"
          component={role === "Paciente" ? PatientQueries : DoctorConsultations}
        />

        {/*  <Stack.Screen
          options={{ title: "Navegação" }}
          component={Navegacao}
          name="Navegacao" />

        <Stack.Screen
          options={{ title: "Login" }}
          component={Login}
          name="Login" />
        <Stack.Screen
          options={{ title: "Criar Conta" }}
          component={CreateAccount}
          name="Criar Conta" />
        <Stack.Screen
          options={{ title: "Recuperar Senha" }}
          component={PasswordRescue}
          name="Recuperar Senha" />
        <Stack.Screen
          options={{ title: "Redefinir Senha" }}
          component={PasswordReset}
          name="Redefinir Senha" />
        <Stack.Screen
          options={{ title: "Verifique seu Email" }}
          component={EmailVerify}
          name="Verifique seu Email" />
        <Stack.Screen
          options={{ title: "Perfil" }}
          component={Profile}
          name="Perfil" />
        <Stack.Screen
          options={{ title: "Inserção Prontuário" }}
          component={MedicalRecordInsert}
          name="Inserção Prontuário" />

        <Stack.Screen
          options={{ title: "Médico Consultas" }}
          component={DoctorConsultations}
          name="Médico Consultas" />
        <Stack.Screen
          options={{ title: "Paciente Consultas" }}
          component={PatientQueries}
          name="Paciente Consultas" />
        <Stack.Screen
          options={{ title: "Selecionar Clínica" }}
          component={SelectClinic}
          name="Selecionar Clínica" />
        <Stack.Screen
          options={{ title: "Selecionar Médico" }}
          component={SelectDoctor}
          name="Selecionar Médico" />
        <Stack.Screen
          options={{ title: "Selecionar Data" }}
          component={SelectDate}
          name="Selecionar Data" />
        <Stack.Screen
          options={{ title: "Visuzalizar Prescrição" }}
          component={ViewPrescription}
          name="Visualizar Prescrição" />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
