import { useQuery } from "@tanstack/react-query";
import { getPots } from "../../services/potsApi";

export function usePots() {
  const { data: pots, isPending } = useQuery({
    queryKey: ["pots"],
    queryFn: getPots,
  });

  return { pots, isLoading: isPending  };
}
