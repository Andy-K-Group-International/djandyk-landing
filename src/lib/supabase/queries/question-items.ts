import type { SupabaseClient } from "@supabase/supabase-js";

export async function listActive(supabase: SupabaseClient) {
  const { data, error } = await supabase
    .from("question_items")
    .select("*")
    .eq("is_active", true)
    .order("number", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export async function listActiveSections(supabase: SupabaseClient) {
  const { data, error } = await supabase
    .from("question_sections")
    .select("*")
    .eq("is_active", true)
    .order("order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((s: any) => ({
    id: s.section_id,
    title: s.title,
    subsections: s.subsections ?? [],
    order: s.order,
  }));
}
