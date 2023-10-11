import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import useLogout from "./useLogout";

export default function Logout() {
  const { isLogingOut, logout } = useLogout();
  return (
    <ButtonIcon disabled={isLogingOut} onClick={logout}>
      {!isLogingOut ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}
