import styled from "styled-components";
import { useState } from "react";
import { usePasswordRecovery } from "./usePasswordRecovery";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

const FormPasswordRecovery = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  padding: 0 6rem;
  margin: 3rem 0 3rem 0;
  overflow: hidden;
  font-size: 1.4rem;
`;

function ForgetPasswordForm() {
  const [email, setEmail] = useState("");
  const { passwordRecovery, isRecovering } = usePasswordRecovery();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    passwordRecovery({ email });
  }

  return (
    <FormPasswordRecovery onSubmit={handleSubmit}>
      <FormRowVertical>
        <Input
          type="email"
          id="email"
          placeholder="Your email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isRecovering}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isRecovering}>
          {!isRecovering ? "Reset password" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </FormPasswordRecovery>
  );
}

export default ForgetPasswordForm;
