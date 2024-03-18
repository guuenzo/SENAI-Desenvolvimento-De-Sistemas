import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

export const BlueGradientHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
})`
 width: 100%;
 height: 115px;
 border-bottom-left-radius: 15px;
 border-bottom-right-radius: 15px;
 flex-direction: row;
 align-items: center;
  `