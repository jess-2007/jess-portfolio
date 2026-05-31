export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmitResult {
  success: boolean;
  error?: string;
}

/**
 * Placeholder for contact form submission.
 * Replace the body with a Supabase insert in the next step, e.g.:
 *
 * const { error } = await supabase.from("contacts").insert({
 *   name: data.name,
 *   email: data.email,
 *   message: data.message,
 * });
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmitResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.log("[Contact Form] Submission received:", data);

  // TODO: Hook up Supabase database insert here
  return { success: true };
}
