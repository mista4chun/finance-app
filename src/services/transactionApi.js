import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export async function getTransactions({ queryKey }) {
  const [_key, { page, search, PAGE_SIZE, sort, filter }, error] = queryKey;
  const from = (page - 1) * PAGE_SIZE;
  const to = page * PAGE_SIZE - 1;
  let query = supabase
    .from("transactions")
    .select("*", { count: "exact" })
    .range(from, to);

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  if (filter) {
    query = query.eq("category", filter);
  }

  if (sort) {
    if (sort.column === "name") {
      query = query.order("name", { ascending: sort.ascending });
    } else if (sort.column === "amount") {
      query = query.order("amount", { ascending: sort.ascending });
    } else if (sort.column === "date") {
      query = query.order("date", { ascending: sort.ascending });
    }
  }

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded");
  }

  const { data, count } = await query;
  return { data, count };
}

export async function getRecurringBills({ queryKey }) {
  const [_key, { search, sort }] = queryKey;
  let query = supabase.from("transactions").select().eq("recurring", true);

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  if (sort) {
    if (sort.column === "name") {
      query = query.order("name", { ascending: sort.ascending });
    } else if (sort.column === "amount") {
      query = query.order("amount", { ascending: sort.ascending });
    } else if (sort.column === "date") {
      query = query.order("date", { ascending: sort.ascending });
    }
  }

  const { data } = await query;

  const filteredData = data.filter(
    (bill) =>
      ![
        "2024-07-05T11:15:22",
        "2024-07-03T14:00:37",
        "2024-07-02T09:25:51",
      ].includes(bill.date),
  );


  return filteredData;
}
