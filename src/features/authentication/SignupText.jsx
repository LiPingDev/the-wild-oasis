import styled from "styled-components";
import ButtonText from "../../ui/ButtonText";
import { useNavigate } from "react-router-dom";

const StyledSignupText = styled.div`
  text-align: center;
`;

function SignupText() {
  const navigate = useNavigate();

  return (
    <StyledSignupText>
      <p>
        Don&apos;t have an account?{" "}
        <ButtonText onClick={() => navigate("/signup")}>Sign up</ButtonText>
      </p>
    </StyledSignupText>
  );
}

export default SignupText;
