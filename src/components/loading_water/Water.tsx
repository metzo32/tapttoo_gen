import styled from "styled-components";

import { WaterAnimation } from "../../stores/animations";
import { ReactComponent as water } from "../../assets/icons/water.svg"



const WaterComp = styled(water)`
  width: 900%;
  height: 148%;
  position: absolute;
  top: 0%;
  left 0%;

  animation: ${WaterAnimation} 12s forwards;
`;


export default function Water() {
  return <WaterComp />;
}

