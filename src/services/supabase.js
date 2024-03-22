import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bcsjwldrbsvmreaerias.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjc2p3bGRyYnN2bXJlYWVyaWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NzAwNTYsImV4cCI6MjAyNTE0NjA1Nn0.e2dc_dqDKU8Pj3_3RvsyZKRYgbdpk_jzMoCwAwVIHsE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
