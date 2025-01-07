import { Link } from "react-router-dom";
import { usePots } from "../Pots/usePots";
import { formatCurrency } from "../../utils/helper";
import TinyCard from "./TinyCard";
import CardSpinner from "../../ui/CardSpinner";

function PotOverview() {
  const { pots, isLoading } = usePots();

  const totalSaved = pots?.reduce((sum, pot) => sum + pot.total, 0);

  if(isLoading) return <CardSpinner />

  return (
    <div className=" mb-6 rounded-xl bg-gray-50 p-6">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-bold">Pots</h2>
        <Link to="/pots" className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">See Details</span>
          <img src="/icon-caret-right.svg" alt="" />
        </Link>
      </div>
  
  <div className="grid md:grid-cols-2 gap-5 items-center">


      <div className="flex items-center gap-5 rounded-xl bg-[#f8f4f0] p-4 ">
        <img src="/icon-pot.svg" alt="" />
        <div>
          <p className="pb-2 font-medium text-gray-400">Total Saved</p>
          <p className="text-3xl font-bold">{formatCurrency(totalSaved)}</p>
        </div>
      </div>
        <div className="grid grid-cols-2 gap-4  md:mt-0">

      {pots?.map((pot) => (
          <TinyCard key={pot.id} pot={pot} />
        ))}
        </div>
    </div>
        </div>
   
  );
}

export default PotOverview;
