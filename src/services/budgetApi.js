import supabase from "./supabase";

export async function getBudgets() {
  let query = supabase.from("budgets").select("*");
  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Budgets could not be loaded");
  }

  return data;
}

export async function addBudget() {
  const { data, error } = await supabase
    .from("budgets")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

    if (error) {
        console.error(error);
        throw new Error("Budgets could not be added");
      }
    
      return data;
}


export async function updateBudget(id) {

const { data, error } = await supabase
.from('budgets')
.update({ other_column: 'otherValue' })
.eq('some_column', 'someValue')
.select()

if (error) {
    console.error(error);
    throw new Error("Budgets could not be updated");
  }

  return data;

}

export async function deleteBudget(id) {

    const { error } = await supabase
    .from('budgets')
    .delete()
    .eq('some_column', 'someValue')
  
}