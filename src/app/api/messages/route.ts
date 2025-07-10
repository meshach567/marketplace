import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { Resend } from 'resend';

// Placeholder for Resend email logic

const resend = new Resend(process.env.RESEND_API_KEY);
// async function sendEmailWithResend({ to: _to, from: _from, subject: _subject, text: _text }: { to: string; from: string; subject: string; text: string }) {
//   // TODO: Integrate with Resend API
//   return { success: true };
// }

async function sendEmailWithResend({
  to,
  from,
  subject,
  text,
}: {
  to: string;
  from: string;
  subject: string;
  text: string;
}) {
  return await resend.emails.send({
    from,
    to,
    subject,
    text,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { listing_id, buyer_email, seller_email, message } = await req.json();
    if (!listing_id || !buyer_email || !seller_email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save message to Supabase
    const { error } = await supabase.from("messages").insert({
      listing_id,
      buyer_email,
      seller_email,
      message,
    });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send email notification to seller (placeholder)
    await sendEmailWithResend({
      to: seller_email,
      from: buyer_email,
      subject: "New message about your listing",
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message || "Unknown error" }, { status: 500 });
  }
} 