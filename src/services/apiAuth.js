import supabase from "./supabase";

export async function signup({ name, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
       
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}


// apiAuth.js
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // console.log("Login response:", data); // Debug login response

  if (error) throw new Error(error.message);

  // Return the user object specifically
  return data.user;
}


export async function getUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

 

  if (error) throw new Error(error.message);

  return data?.user;
}


export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
