"use server";

async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
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
      from: "Andy'K Group <info@andykgroupinternational.com>",
      to: [to],
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Resend API error:", error);
    throw new Error(`Failed to send email: ${error}`);
  }

  return await response.json();
}

export async function sendPreQualificationNotification({
  staffEmail,
  clientEmail,
  companyName,
  contactName,
  serviceType,
  answers,
}: {
  staffEmail: string;
  clientEmail: string;
  companyName: string;
  contactName: string;
  serviceType: string;
  answers: Record<string, any>;
}) {
  const answerLines = Object.entries(answers)
    .filter(([key]) => key.startsWith("pre"))
    .map(([key, val]) => `  ${key}: ${Array.isArray(val) ? val.join(", ") : val}`)
    .join("\n");

  return await sendEmail({
    to: staffEmail,
    subject: `New Pre-Qualification: ${companyName} (${serviceType.toUpperCase()})`,
    text: `New pre-qualification submission received.

Company: ${companyName}
Contact: ${contactName} (${clientEmail})
Recommended Service: ${serviceType.toUpperCase()}
Submitted: ${new Date().toISOString()}

Pre-Qualification Answers:
${answerLines}

Best regards,
Andy'K Group International`,
  });
}

export async function sendQuestionnaireNotification({
  staffEmail,
  clientEmail,
  companyName,
  contactName,
  serviceType,
  answers,
}: {
  staffEmail: string;
  clientEmail: string;
  companyName: string;
  contactName: string;
  serviceType: string;
  answers: Record<string, any>;
}) {
  const answerLines = Object.entries(answers)
    .map(([key, val]) => {
      const display = Array.isArray(val)
        ? val.join(", ")
        : typeof val === "object" && val !== null
        ? JSON.stringify(val, null, 2)
        : String(val);
      return `  ${key}: ${display}`;
    })
    .join("\n");

  return await sendEmail({
    to: staffEmail,
    subject: `New Questionnaire Submitted: ${companyName} (${serviceType.toUpperCase()})`,
    text: `Full questionnaire submitted.

Company: ${companyName}
Contact: ${contactName} (${clientEmail})
Service Type: ${serviceType.toUpperCase()}
Submitted: ${new Date().toISOString()}

All Answers:
${answerLines}

Best regards,
Andy'K Group International`,
  });
}

export async function sendClientConfirmation({
  clientEmail,
  clientName,
  serviceType,
}: {
  clientEmail: string;
  clientName: string;
  serviceType: string;
}) {
  const isE2E = serviceType === "e2e";

  return await sendEmail({
    to: clientEmail,
    subject: "We've received your questionnaire — Andy'K Group International",
    text: `Dear ${clientName},

Thank you for completing your questionnaire with Andy'K Group International.

We have received your submission and our team is reviewing it.${
      isE2E
        ? "\n\nAs an End-to-End Strategic Architecture engagement, your submission will be reviewed within 48 hours by our senior team."
        : ""
    }

You will hear from us shortly with next steps.

Best regards,
Andy'K Group International
info@andykgroupinternational.com
+44 330 027 1319`,
  });
}
