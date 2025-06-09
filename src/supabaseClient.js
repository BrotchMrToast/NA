import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.https://flgdzbbrwqjqprdxhgqf.supabase.co
const supabaseKey = import.meta.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZ2R6YmJyd3FqcXByZHhoZ3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNzI3NjksImV4cCI6MjA2NDk0ODc2OX0.Vqb1Rb6tkAfDGHPN5daoEbxudGymT_5baqLGFCIIjVM;

export const supabase = createClient(supabaseUrl, supabaseKey);
