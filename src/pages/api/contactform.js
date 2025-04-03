import { Resend } from "resend";
import ContactDetails from "@/components/emailtemplate/ContactDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, company, services, message, terms, number, pageURL } = req.body;
     
    if (!name || !email || !company || !services) {
      return res.status(400).json({ error: "Required fields missing" });
    }
    const { data, error } = await resend.emails.send({
      // from: "Acme <onboarding@resend.dev>",
      // to: ["harshgoyalrss7@gmail.com"],
      from:"WebForms <contact@hiveminds.in>",
      to:["sales@hiveminds.in"],
      subject: "New Contact Form Submission",
      react: ContactDetails({
        userName: name,
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
