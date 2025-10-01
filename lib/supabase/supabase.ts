// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = process.env.DB_DOMAIN!
export const supabaseAnonKey = process.env.API_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)



