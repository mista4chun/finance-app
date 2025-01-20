import { CiLogout } from "react-icons/ci";
import { useLogout } from "./useLogout";
import LoadingSpinner from "../../ui/LoadingSpinner";

function Logout() {
  const { mutate, isLoading } = useLogout();
  return (
    <div
      onClick={() => mutate()}
      disabled={isLoading}
      className={` hover:bg-[#504036] cursor-pointer rounded-md p-2`}
    >
      {!isLoading ? (
        <CiLogout className="size-7 hover:text-white" />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default Logout;
