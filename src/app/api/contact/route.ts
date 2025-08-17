import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Basic email validation to reduce obvious spam
    const isLikelyEmail = /.+@.+\..+/.test(email) && email.length <= 254;
    if (!isLikelyEmail) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // Configure SMTP transporter from env or URL
    const smtpUrl = process.env.SMTP_URL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT
      ? Number(process.env.SMTP_PORT)
      : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;

    const hasSmtpConfig = Boolean(
      smtpUrl || smtpHost || (smtpUser && smtpPass)
    );
    if (!hasSmtpConfig) {
      console.error("SMTP not configured. Set SMTP_URL or SMTP_HOST/PORT/USER/PASS env vars.");
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = smtpUrl
      ? nodemailer.createTransport(smtpUrl)
      : nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort ?? 587,
          secure: Boolean(smtpSecure),
          auth:
            smtpUser && smtpPass
              ? { user: smtpUser, pass: smtpPass }
              : undefined,
        });

    const toAddress = process.env.CONTACT_TO_EMAIL || "efreethy@gmail.com";
    const fromAddress =
      process.env.SMTP_FROM || smtpUser || "no-reply@ultra.ai";

    const subject = `Ultra AI — New contact form submission from ${name}`;
    const textBody = `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">New contact form submission</h2>
        <p style="margin: 0 0 4px;"><strong>Name:</strong> ${escapeHtml(
          name
        )}</p>
        <p style="margin: 0 0 12px;"><strong>Email:</strong> ${escapeHtml(
          email
        )}</p>
        <div style="padding: 12px; border: 1px solid #eee; border-radius: 8px; background: #fafafa;">
          <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        to: toAddress,
        from: fromAddress,
        replyTo: email,
        subject,
        text: textBody,
        html: htmlBody,
      });
    } catch (error) {
      // Avoid leaking sensitive details to the client
      console.error("Failed to send contact email:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.redirect(new URL("/?#contact=success", request.url));
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
