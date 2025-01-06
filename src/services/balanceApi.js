import supabase from "./supabase";

export async function getBalance() {
  const { data, error } = await supabase.from("balance").select();

  if (error) {
    throw new Error("Balance could not be loaded");
  }
  return data;
}
