import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.VITE_APP_SUPABASE_URL,
    process.env.VITE_APP_SUPABASE_KEY
);
