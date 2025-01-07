import { CiLogout } from "react-icons/ci";
import { useLogout } from "./useLogout";

function Logout() {
  const { mutate, isLoading } = useLogout();
  return (
    <div onClick={() => mutate()} disabled={isLoading} className="hover:bg-[#fff] cursor-pointer p-2 rounded-md">
      <CiLogout className="size-7 " />
    </div>
  );
}

export default Logout;
