import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";

const ResetPasswordLayout = styled.div`
  display: grid;
  gap: 4rem;
  margin: 6rem auto;
  padding: 2.4rem 4rem;
  overflow: hidden;
  font-size: 1.4rem;
  max-width: 60rem;
`;

function ResetPassword() {
  return (
    <ResetPasswordLayout>
      <Logo />
      <Heading as="h4">Reset your password</Heading>
      <ResetPasswordForm />
    </ResetPasswordLayout>
  );
}

export default ResetPassword;
