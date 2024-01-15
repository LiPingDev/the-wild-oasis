import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { passwordRecovery as passwordRecoveryApi } from "../../services/apiAuth";

export function usePasswordRecovery() {
  const navigate = useNavigate();

  const { mutate: passwordRecovery, isLoading: isRecovering } = useMutation({
    mutationFn: ({ email }) => passwordRecoveryApi({ email }),
    onSuccess: () => {
      toast.success(
        "A password reset email has been sent to your email address provided.",
        navigate("/login", { replace: true })
      );
    },

    onError: (err) => toast.error(err.message),
  });
  return { passwordRecovery, isRecovering };
}
