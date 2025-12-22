// app/api/send-otp/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const SECRET = process.env.OTP_SECRET!;

export async function POST(req: Request) {
  const { email, name } = await req.json();

  if (!email || !name) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = Date.now() + 5 * 60 * 1000;

  const payload = `${email}|${name}|${otp}|${expires}`;
  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");

  const token = Buffer.from(
    JSON.stringify({ expires, signature })
  ).toString("base64");

  await resend.emails.send({
    from: "Logger <onboarding@resend.dev>",
    to: email,
    template: {
    id: "8718062e-3be9-4386-be7f-fcbe48d23432",
    variables: {
      otp,
    },
    },
  });

  return NextResponse.json({ token });
}
