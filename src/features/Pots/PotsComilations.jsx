import { useQuery } from "@tanstack/react-query";
import { getPots } from "../../services/potsApi";
import PotComponent from "./PotComponent";
import { useState } from "react";;
import CreatePotsForm from "./CreatePotsForm";

function PotsCompilations() {
  const [openModal, setOpenModal] = useState(false)
  const { data, isLoading } = useQuery({
    queryFn: getPots,
    queryKey: ["pots"],
  });

  if(isLoading) return <p className="flex items-center justify-center h-screen animate-pulse  text-2xl font-semibold ">Loading... </p>
  return (
    <>
      <header className="flex items-center justify-between px-4 py-6">
        <h1 className="text-3xl font-bold">Pots</h1>
        <button
          className="rounded-md bg-[#201f24] px-4 py-3.5 font-bold tracking-tighter text-gray-100"
          onClick={() => setOpenModal(!openModal)}
        >
          +Add New Pot
        </button>
        {openModal && <CreatePotsForm close={setOpenModal} openModal={openModal} />}
      </header>
      <main className="grid lg:grid-cols-2 gap-3">
        {data?.map((pot) => (
          <PotComponent key={pot.id} pot={pot} />
        ))}
      </main>
    </>
  );
}

export default PotsCompilations;
