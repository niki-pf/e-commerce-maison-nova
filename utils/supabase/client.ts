import { supabase, supabaseAnonKey, supabaseUrl } from "@/lib/supabase/supabase";
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
    return createBrowserClient(
        supabaseUrl,
        supabaseAnonKey
    );
}

