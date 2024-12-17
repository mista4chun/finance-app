import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mkkixntkwwvbhkexfpbs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ra2l4bnRrd3d2YmhrZXhmcGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNTk2NzksImV4cCI6MjA0OTczNTY3OX0.V3NczhpMNX843g8a68pGOZG1UQJIoenOjeBl_b6PAv4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
