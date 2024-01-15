import styled from "styled-components";
import Heading from "../../ui/Heading";
import SignupFormWithBack from "./SignupFormWithBack";
import Logo from "../../ui/Logo";

const StyledSignup = styled.div`
  margin: 10rem auto;
  display: grid;
  place-items: center;
  gap: 4rem;
`;

function Signup() {
  return (
    <StyledSignup>
      <Logo />
      <Heading as="h1">Create a new user</Heading>
      <SignupFormWithBack />
    </StyledSignup>
  );
}

export default Signup;
