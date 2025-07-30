import { Resend } from "resend";

import CareerDetails from "@/components/emailtemplate/CareerDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, message, terms ,number} = req.body;
     
    if (!name || !email) {
      return res.status(400).json({ error: "Required fields missing" });
    }
    const { data, error } = await resend.emails.send({
    from:"WebForms <careers@hiveminds.in>",
    to:["ta@hiveminds.in"],
      subject: "New Career Form Submission",
      react: CareerDetails({
        userName: name,
        userEmail: email,
        userNumber:number,
        userMessage: message || "No message provided",
        userConsent: terms ? "Yes" : "No",
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
