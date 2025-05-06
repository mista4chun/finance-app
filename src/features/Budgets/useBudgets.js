import { useQuery } from "@tanstack/react-query";
import { getBudgets } from "../../services/budgetApi";

export function useBudgets() {
  const { data: budgets, isPending } = useQuery({
    queryKey: ["budgets"],
    queryFn: getBudgets,
  });

  return { budgets, isLoading: isPending };
}
