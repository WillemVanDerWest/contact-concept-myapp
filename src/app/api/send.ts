import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "../components/email-template";

const resend = new Resend("re_f5GEwgki_MDcwH1kpdyc8mah8H64ujEoF");

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { data, error } =await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['willem04011999@gmail.com'],
        subject: 'Hello World',
        react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
        return res.status(400).json(error);
    }

    res.status(200).json(data);
};