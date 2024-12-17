import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/transactionApi";

function useTransactions() {
     const { isLoading, data: transactions } = useQuery({
        queryKey: ["transactions"],
        queryFn: getTransactions,
      });
    return {isLoading, transactions}
}

export default useTransactions
