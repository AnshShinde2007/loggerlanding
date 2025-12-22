// app/api/verify-otp/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import clientPromise from "@/lib/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const SECRET = process.env.OTP_SECRET!;

export async function POST(req: Request) {
  const { email, name, otp, token } = await req.json();

  const { expires, signature } = JSON.parse(
    Buffer.from(token, "base64").toString()
  );

  if (Date.now() > expires) {
    return NextResponse.json({ error: "OTP expired" }, { status: 400 });
  }

  const payload = `${email}|${name}|${otp}|${expires}`;
  const expectedSig = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");

  if (expectedSig !== signature) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
  }

  // store verified user
  const client = await clientPromise;
  const db = client.db();

  await db.collection("waitlist").updateOne(
    { email },
    {
      $setOnInsert: {
        email,
        name,
        verified: true,
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );

  // send thank-you email
  await resend.emails.send({
  from: "Logger <onboarding@resend.dev>",
  to: email,
  template: {
    id: "e862a281-cbcd-4c58-87f7-2c532c446f32",
    variables: {
      name,
    },
  },
});


  return NextResponse.json({ ok: true });
}
