import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.postgresql://postgres:[YOUR-PASSWORD]@db.flgdzbbrwqjqprdxhgqf.supabase.co:5432/postgres;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
