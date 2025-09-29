"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const signup = async (formData: FormData) => {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: signUpData, error } = await supabase.auth.signUp(data);
  // const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect("/error");
  }

  // Create a profile in 'profiles' table if user is created
  const user = signUpData?.user;
  if (user) {
    await supabase.from("profiles").insert({
      id: user.id,
      username: formData.get("username") as string,
      full_name: formData.get("full_name") as string,
      // Add more fields if you want, example username: formData.get("username")
    });
  }

  revalidatePath("/", "layout");
  redirect("/confirmation");
};
