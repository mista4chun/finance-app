// import { useState } from "react";

import { useState } from "react";
import { useBudgets } from "./useBudgets";

import BudgetComponent from "./BudgetComponent";
import BudgetsSummary from "./BudgetsSummary";
import CreateBudgetForm from "./CreateBudgetForm";
import Logout from "../authentication/Logout";



function BudgetsCompilations() {
 const {budgets, isLoading} = useBudgets()
const [openModal, setOpenModal] = useState(false)

 
if(isLoading) return <p className="flex items-center justify-center h-screen animate-pulse  text-2xl font-semibold ">Loading... </p>

  return (
    <section className="px-4 py-6">
      <div className="flex items-center justify-between pb-8">
        <h1 className="text-3xl font-bold">Budgets</h1>
        <div className="flex items-center gap-8">

        <button className="rounded-md bg-[#201f24] px-4 py-3.5 font-bold tracking-tighter text-gray-100" onClick={()=>setOpenModal(!openModal)}>
          +Add New Budget
        </button>
        {openModal && <CreateBudgetForm close={setOpenModal} openModal={openModal} />}
        <Logout />
        </div>
      </div>

      <div className="flex-col items-start space-y-5 md:grid md:gap-5 md:space-y-0 lg:grid-cols-[1fr_1.5fr]">
        <div>
      
        <BudgetsSummary  budgets={budgets} />
     
        </div>

        <div>
          {budgets?.map((budget) => (
            <BudgetComponent budget={budget} key={budget.id} close={setOpenModal} openModal={openModal} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BudgetsCompilations;
