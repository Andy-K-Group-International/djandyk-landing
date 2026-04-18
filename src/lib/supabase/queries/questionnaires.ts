import type { SupabaseClient } from "@supabase/supabase-js";

export async function saveDraft(
  supabase: SupabaseClient,
  {
    email,
    answers,
    selectedSegments,
    currentPageIndex,
  }: {
    email: string;
    answers: Record<string, any>;
    selectedSegments: string[];
    currentPageIndex: number;
  }
) {
  // Check for existing draft
  const { data: existing } = await supabase
    .from("questionnaires")
    .select("id")
    .eq("contact_email", email)
    .eq("status", "draft")
    .maybeSingle();

  const draftData = {
    company_name: answers.companyName || answers.preCompanyName || "",
    website_url: answers.websiteUrl || answers.preWebsite || "",
    billing_currency: answers.billingCurrency || "GBP",
    contact_name: answers.contactName || answers.preContactName || "",
    contact_phone: answers.contactPhone || answers.prePhone || "",
    contact_email: email,
    address: answers.address || {},
    data_enrichment_consent: !!answers.dataEnrichmentConsent,
    social_profiles: answers.socialProfiles || "",
    countries_of_operation: answers.countriesOfOperation || "",
    years_in_business: answers.yearsInBusiness || "",
    annual_revenue: answers.annualRevenue || answers.preAnnualRevenue || "",
    products_services: answers.productsServices || "",
    business_goals: answers.successVision || answers.prePrimaryObjective || "",
    challenges: answers.biggestObstacle || "",
    competitors: answers.competitors || "",
    usp: answers.usp || "",
    communication_channels: [],
    security_requirements: answers.securityRequirements || null,
    privacy_policy_agreed: !!answers.privacyPolicyAgreed,
    segments: selectedSegments,
    b2b_data: selectedSegments.includes("B2B") ? extractScopedData(answers, "b2b") : null,
    b2g_data: selectedSegments.includes("B2G") ? extractScopedData(answers, "b2g") : null,
    adam_data: selectedSegments.includes("ADAM") ? extractScopedData(answers, "adam") : null,
    e2e_data: selectedSegments.includes("E2E") ? extractScopedData(answers, "e2e") : null,
    pre_qualification_data: extractScopedData(answers, "pre"),
    status: "draft",
    session_id: `landing-${email}-${Date.now()}`,
  };

  if (existing) {
    const { error } = await supabase
      .from("questionnaires")
      .update(draftData)
      .eq("id", existing.id);
    if (error) throw error;
    return existing.id;
  } else {
    const { data, error } = await supabase
      .from("questionnaires")
      .insert(draftData)
      .select("id")
      .single();
    if (error) throw error;
    return data.id;
  }
}

export async function getDraftByEmail(supabase: SupabaseClient, email: string) {
  const { data, error } = await supabase
    .from("questionnaires")
    .select("*")
    .eq("contact_email", email)
    .eq("status", "draft")
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function deleteDraft(supabase: SupabaseClient, email: string) {
  const { error } = await supabase
    .from("questionnaires")
    .delete()
    .eq("contact_email", email)
    .eq("status", "draft");
  if (error) throw error;
}

export async function submitDraft(
  supabase: SupabaseClient,
  {
    email,
    answers,
    selectedSegments,
  }: {
    email: string;
    answers: Record<string, any>;
    selectedSegments: string[];
  }
) {
  // Find existing draft
  const { data: draft } = await supabase
    .from("questionnaires")
    .select("id")
    .eq("contact_email", email)
    .eq("status", "draft")
    .maybeSingle();

  if (draft) {
    const { error } = await supabase
      .from("questionnaires")
      .update({
        status: "submitted",
        submitted_at: new Date().toISOString(),
        segments: selectedSegments,
        b2b_data: selectedSegments.includes("B2B") ? extractScopedData(answers, "b2b") : null,
        b2g_data: selectedSegments.includes("B2G") ? extractScopedData(answers, "b2g") : null,
        adam_data: selectedSegments.includes("ADAM") ? extractScopedData(answers, "adam") : null,
        e2e_data: selectedSegments.includes("E2E") ? extractScopedData(answers, "e2e") : null,
      })
      .eq("id", draft.id);
    if (error) throw error;
    return draft.id;
  }

  // No draft — insert directly as submitted
  const { data, error } = await supabase
    .from("questionnaires")
    .insert({
      company_name: answers.companyName || answers.preCompanyName || "",
      website_url: answers.websiteUrl || answers.preWebsite || "",
      billing_currency: answers.billingCurrency || "GBP",
      contact_name: answers.contactName || answers.preContactName || "",
      contact_phone: answers.contactPhone || answers.prePhone || "",
      contact_email: email,
      address: answers.address || {},
      data_enrichment_consent: !!answers.dataEnrichmentConsent,
      social_profiles: answers.socialProfiles || "",
      countries_of_operation: answers.countriesOfOperation || "",
      years_in_business: answers.yearsInBusiness || "",
      annual_revenue: answers.annualRevenue || answers.preAnnualRevenue || "",
      products_services: answers.productsServices || "",
      business_goals: answers.successVision || answers.prePrimaryObjective || "",
      challenges: answers.biggestObstacle || "",
      competitors: answers.competitors || "",
      usp: answers.usp || "",
      communication_channels: [],
      privacy_policy_agreed: !!answers.privacyPolicyAgreed,
      segments: selectedSegments,
      b2b_data: selectedSegments.includes("B2B") ? extractScopedData(answers, "b2b") : null,
      b2g_data: selectedSegments.includes("B2G") ? extractScopedData(answers, "b2g") : null,
      adam_data: selectedSegments.includes("ADAM") ? extractScopedData(answers, "adam") : null,
      e2e_data: selectedSegments.includes("E2E") ? extractScopedData(answers, "e2e") : null,
      pre_qualification_data: extractScopedData(answers, "pre"),
      status: "submitted",
      submitted_at: new Date().toISOString(),
      session_id: `landing-${email}-${Date.now()}`,
    })
    .select("id")
    .single();
  if (error) throw error;
  return data.id;
}

function extractScopedData(answers: Record<string, any>, prefix: string): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, val] of Object.entries(answers)) {
    if (key.toLowerCase().startsWith(prefix.toLowerCase())) {
      result[key] = val;
    }
  }
  return result;
}
