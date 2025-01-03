import supabase from "./supabase";

export async function getPots() {
  let { data, error } = await supabase.from("pots").select("*");

  if (error) {
    console.error(error);
    throw new Error("budgets could not be created");
  }

  return data;
}

export async function createPot(newPot) {
  const { data, error } = await supabase.from("pots").insert([newPot]).select();

  if (error) {
    console.error(error);
    throw new Error("budgets could not be created");
  }

  return data;
}

export async function updatePot({ newPot, id }) {
  const { data, error } = await supabase
    .from("pots")
    .update(newPot)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("budgets could not be created");
  }

  return data;
}

export async function deletePot(id) {
  const { data, error } = await supabase.from("pots").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("budgets could not be deleted");
  }

  return data;
}


export async function handleTransaction({ potId, amount }) {
  try {
    // Fetch the current total for the specified pot
    const { data: pot, error: fetchError } = await supabase
      .from("pots")
      .select("total")
      .eq("id", potId)
      .single();

    if (fetchError) {
      console.error(fetchError);
      throw new Error("Failed to fetch pot data.");
    }

    // Calculate the new total
    const updatedTotal = pot.total + amount;

    // Update the pot's total
    const { data: updatedPot, error: updateError } = await supabase
      .from("pots")
      .update({ total: updatedTotal })
      .eq("id", potId)
      .select()
      .single();

    if (updateError) {
      console.error(updateError);
      throw new Error("Failed to update pot total.");
    }

    return updatedPot;
  } catch (error) {
    console.error("Transaction Error:", error.message);
    throw error; // Re-throw the error to be handled by the caller
  }
}
