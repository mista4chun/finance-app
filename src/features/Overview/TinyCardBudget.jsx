import { formatCurrency } from "../../utils/helper"

function TinyCardBudget({budget}) {
    return (
        <div className="flex items-center gap-3 ">
                 <div className="h-11 rounded-md w-1" style={{backgroundColor: budget.theme}}></div>  
                 <div >
                   <p className="text-sm text-gray-400 font-medium pb-1">{budget.category}</p>
                   <p className="font-bold text-sm">{formatCurrency(budget.maximum)}</p>
                 </div>
               </div>
    )
}

export default TinyCardBudget
