import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://batqposcebwoksqjusff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdHFwb3NjZWJ3b2tzcWp1c2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NzQ4ODUsImV4cCI6MjA4NjI1MDg4NX0.5rzMsVqLIjIBh-u_uDeh2LwQlehz-bSsQS_FpzVS2m8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
