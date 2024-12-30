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
    budget.spent = latestTransactions
      .slice(0, 2)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }
  return budgets;
}


export async function createBudget(newBudget) {
  const { data, error } = await supabase
    .from("budgets")
    .insert([newBudget])
    .select();

  if (error) {
    console.error(error);
    throw new Error("budgets could not be created");
  }

  return data;
}


export async function updateBudget({ newBudget, id }) {

const { data, error } = await supabase
.from('budgets')
.update(newBudget)
.eq('id', id)
.select()

if (error) {
  console.error(error);
  throw new Error("budgets could not be updated");
}

return data;


}



export async function deleteBudget(id) {
  const { data, error } = await supabase.from("budgets").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("budgets could not be deleted");
  }

  return data;
}
