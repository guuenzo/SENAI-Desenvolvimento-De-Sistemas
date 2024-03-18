import { ContainerCardDoctor, DoctorDataContainer, DoctorImage, DoctorName, DoctorSpecialty } from "./Style"


export const CardDoctor = ({name, specialty, onPress, clickButton, image}) => {
    return (
        <ContainerCardDoctor onPress={onPress} clickButton={clickButton}>

             <DoctorImage source={image}/>

            <DoctorDataContainer>
                <DoctorName>{name}</DoctorName>

                <DoctorSpecialty>{specialty}</DoctorSpecialty>
            </DoctorDataContainer>

        </ContainerCardDoctor>
    )
}