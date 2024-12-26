import supabase from "./supabase";

export async function getBudgets() {
    const { data: budgets } = await supabase.from("budgets").select();
    for (const budget of budgets) {
      const { data: latestTransactions } = await supabase
        .from("transactions")
        .select()
        .eq("category", budget.category)
        .order("date", { ascending: false })
        .limit(3);
      budget.latestTransactions = latestTransactions;
      budget.spent = latestTransactions.slice(0, 2).reduce((sum, transaction) => sum + transaction.amount, 0);
     
    }
    return budgets;
}