import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import ForgetPasswordForm from "../features/authentication/ForgetPasswordForm";
import ButtonText from "../ui/ButtonText";
import { useMoveBack } from "../hooks/useMoveBack";

const ForgetPasswordLayout = styled.div`
  margin: 10rem auto;
  padding: 8rem 6rem;
  display: grid;
  place-items: center;
  gap: 1rem;
  background-color: var(--color-grey-50);
  max-width: 70vw;
`;

export default function ForgetPassword() {
  const moveBack = useMoveBack();

  return (
    <ForgetPasswordLayout>
      <Logo />
      <Heading as="h4">Forgot password?</Heading>
      <p>No worries, we&apos;ll send you a link to reset your password. </p>
      <ForgetPasswordForm />
      <ButtonText onClick={moveBack}>&larr; Back to log in</ButtonText>
    </ForgetPasswordLayout>
  );
}
