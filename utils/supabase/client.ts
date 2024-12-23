import { createBrowserClient } from "@supabase/ssr";
import { createClient as newClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = newClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)


export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
