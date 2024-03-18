import {
  ClinicLocal,
  ClinicName,
  ContainerClinicData,
  ContainerInputLabel,
  ContainerInputLabelFlex,
  Input,
  InputLittle,
  Label,
  MapImage,
  Modal,
  ModalQueryLocalData,
} from "./Style";
import mapImage from "../../../assets/image1.png";
import { LinkBlue } from "../LinkMedium/Style";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Map } from "../Map/Index";

export const QueryLocal = ({
  navigation,
  setShowQueryLocal,
  visible,
  ...rest
}) => {
  const ClinicData = [
    {
      clinicName: "Clínica Natureh",
      clinicLocal: "São Paulo",
      clinicUf: "SP",
      clinicStreet: "Rua Vicenso Silva, 987",
      clinicAddressNumber: "578",
      clinicNeighborhood: "Moema",
    },
  ];

  function navegar(){
    navigation.navigate("Main")
  }

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <Map />

      <ModalQueryLocalData>
        <ContainerClinicData>
          <ClinicName>{ClinicData[0].clinicName}</ClinicName>
          <ClinicLocal>
            {ClinicData[0].clinicLocal}, {ClinicData[0].clinicUf}
          </ClinicLocal>
        </ContainerClinicData>

        <ContainerInputLabel>
          <Label>Endereço</Label>
          <Input>{ClinicData[0].clinicStreet}</Input>
        </ContainerInputLabel>

        <ContainerInputLabelFlex>
          <ContainerInputLabel>
            <Label>Número</Label>
            <InputLittle>{ClinicData[0].clinicAddressNumber}</InputLittle>
          </ContainerInputLabel>

          <ContainerInputLabel>
            <Label>Bairro</Label>
            <InputLittle>{ClinicData[0].clinicNeighborhood}</InputLittle>
          </ContainerInputLabel>
        </ContainerInputLabelFlex>

        <TouchableOpacity onPress={navegar}>
          <LinkBlue>Voltar</LinkBlue>
        </TouchableOpacity>
      </ModalQueryLocalData>
    </Modal>
  );
};
