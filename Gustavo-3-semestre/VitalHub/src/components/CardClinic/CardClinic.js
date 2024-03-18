import { Icon } from "react-native-elements"
import { ClinicLocal, ClinicName, ClinicOperation, ClinicOperationContainer, ClinicRate, ClinicRateContainer, ContainerBox, ContainerCardClinic, ContainerClinicData } from "./Style"
import { TouchableOpacity } from "react-native"

export const CardClinic = ({ name, local, rate, operation, onPress, clickButton }) => {
    return (
        <ContainerCardClinic onPress={onPress} clickButton={clickButton}>

            <ContainerClinicData>
                <ClinicName>{name}</ClinicName>

                <ClinicLocal>{local}</ClinicLocal>
            </ContainerClinicData>

            <ContainerBox>

                <ClinicRateContainer>
                    <Icon
                        name='star' type='font-awesome'
                        color='#F9A620'
                        size={20}
                    />
                    <ClinicRate> {rate}</ClinicRate>

                </ClinicRateContainer>


                <ClinicOperationContainer>
                    <Icon
                        name="calendar"
                        size={14}
                        type="material-community"
                        color='#49B3BA'
                    />
                    <ClinicOperation>{operation}</ClinicOperation>
                </ClinicOperationContainer>

            </ContainerBox>

        </ContainerCardClinic>
    )
}