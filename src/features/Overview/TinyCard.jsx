import { formatCurrency } from "../../utils/helper"

function TinyCard({pot}) {
    return (
       

        <div className="flex items-center gap-3">
          <div className="h-11 rounded-md w-1" style={{backgroundColor: pot.theme}}></div>  
          <div >
            <p className="text-sm text-gray-400 font-medium pb-1">{pot.name}</p>
            <p className="font-bold text-sm">{formatCurrency(pot.total)}</p>
          </div>
        </div>
      
    )
}

export default TinyCard
