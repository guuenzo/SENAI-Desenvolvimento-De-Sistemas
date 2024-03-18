import { ContainerLabelInput, Label, Input } from "./Style"

export const InputTime = ({placeholder, placeholdertextcolor}) => {
    return (
        <ContainerLabelInput>

            <Label>Selecione um horário disponível</Label>

            <Input
                placeholder={placeholder}
                placeholderTextColor={placeholdertextcolor}
            />

        </ContainerLabelInput>
    )
}