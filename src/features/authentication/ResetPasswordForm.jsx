import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUpdateUser } from "./useUpdateUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function ResetPasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser(
      { password },
      { onSuccess: (reset, navigate("/login", { replace: true })) }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New password (min 8 chars)"
        error={errors?.password?.message}
      >
        <Input
          label="password"
          type="password"
          id="password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              vlue: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        type="password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default ResetPasswordForm;
