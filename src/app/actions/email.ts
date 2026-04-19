"use server";

export async function sendContactNotification({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not set, skipping email send");
    return null;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "DJ Andy'K Website <info@djandyk.com>",
      to: ["info@djandyk.com"],
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Resend API error:", error);
    throw new Error(`Failed to send email: ${error}`);
  }

  return await response.json();
}
