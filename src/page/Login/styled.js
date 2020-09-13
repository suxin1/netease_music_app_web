import styled from "styled-components";
import {RoundInput} from "../../UI/Input";
import {Button} from "../../UI/Button";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  padding: 15vh 0;
  box-sizing: border-box;
`;

export const LoginFormContainer = styled.form`
  height: 20vh;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 10px;
  align-items: center;
  justify-items: center;
  margin: 0 10vw 0 10vw;
`;

export const LimitedInput = styled(RoundInput)`
  max-width: 300px;
  width: 80vw;
`;

export const LimitedButton = styled(Button)`
  max-width: 300px;
  width: 80vw;
`;
