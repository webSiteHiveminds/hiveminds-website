import { Resend } from "resend";
import SODDetails from "@/components/emailtemplate/SODDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email,phone, city, mode} = req.body;
     
    if (!name || !email ) {
      return res.status(400).json({ error: "Required fields missing" });
    }
    const { data, error } = await resend.emails.send({
      // from: "Acme <onboarding@resend.dev>",
      // to: ["harshgoyalrss7@gmail.com"],
      from:"WebForms <school-of-digital@hiveminds.in>",
      to:["sales@hiveminds.in"],
      subject: "New School of digital Form Submission",
      react: SODDetails({
        userName: name,
        userEmail: email,
        userNumber:phone,
        userCity: city,
        userMode: mode,
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
