import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.DB_DOMAIN,
  process.env.API_KEY
);
