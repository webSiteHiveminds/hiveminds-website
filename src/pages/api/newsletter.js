import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({ message: "Invalid email address" });
    }

    try {
        await resend.contacts.create({
            email: email,
            unsubscribed: false,
            audienceId: "20df2b43-879c-42b0-8f62-8d9e3602a729",
        });

        return res.status(200).json({ message: "Subscribed successfully" });
    } catch (error) {
        console.error("Error subscribing user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
