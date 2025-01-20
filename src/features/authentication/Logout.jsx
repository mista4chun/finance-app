import { CiLogout } from "react-icons/ci";
import { useLogout } from "./useLogout";
import LoadingSpinner from "../../ui/LoadingSpinner";

function Logout() {
  const { mutate, isLoading } = useLogout();
  return (
    <div onClick={() => mutate()} disabled={isLoading} className="hover:bg-[#fff] cursor-pointer p-2 rounded-md">
     {!isLoading ?  <CiLogout className="size-7 " /> : <LoadingSpinner />}
    </div>
  );
}

export default Logout;
