import { Resend } from "resend";
import ContactDetails from "@/components/emailtemplate/ContactDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { firstName, lastName, email, company, services, message, terms, number, pageURL } = req.body;
     
    if (!firstName || !lastName || !email || !company || !services) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    // Send to Zoho Flow webhook
    const webhookData = {
      ...req.body,
      form_identifier: "nextjs_contactform"
    };

    const webhookResponse = await fetch('https://flow.zoho.in/60033128304/flow/webhook/incoming?zapikey=1001.b9ab7c2889575145301f0aa4350d537c.6fd58aa9ad47e65bf649933afd270b29&isdebug=false', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!webhookResponse.ok) {
      console.error('Failed to send to Zoho Flow webhook');
      // We don't throw an error here as we want to continue with the email sending
    }
    else {
      console.log("Webhook sent successfully");
    }

    const { data, error } = await resend.emails.send({
      // from: "Acme <onboarding@resend.dev>",
      // to: ["harshgoyalrss7@gmail.com"],
      from:"WebForms <contact@hiveminds.in>",
      to:["sales@hiveminds.in"],
      // to: ["hitesh@weareenigma.com"],
      subject: "New Contact Form Submission",
      react: ContactDetails({
        userName: `${firstName} ${lastName}`,
        userEmail: email,
        userNumber:number,
        userCompany: company,
        userService: services,
        userMessage: message || "No message provided",
        userConsent: terms ? "Yes" : "No",
        pageUrl: pageURL || "",
      }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("API Error:", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

