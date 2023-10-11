/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vwvwdhowuvqrswlelwoo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dndkaG93dXZxcnN3bGVsd29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMjE4MjUsImV4cCI6MjAxMDY5NzgyNX0.kkykD8ualoPa9yPE_3RdlgnTSpV81qspS2BqJfvQP10";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
