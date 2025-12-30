import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Check if SMTP credentials are set
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('SMTP credentials are missing in environment variables');
            return NextResponse.json(
                { error: 'Server configuration error. Please contact the owner.' },
                { status: 500 }
            );
        }

        // Configure Nodemailer with Google SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 1. Send Email to Owner
        const ownerMailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Gmail requires 'from' to be the authenticated user or an alias
            to: process.env.SMTP_USER,
            replyTo: email,
            subject: `New Contact Form Message: ${subject || 'No Subject'}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #007bff;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        };

        // 2. Send Confirmation Email to Sender
        const confirmationMailOptions = {
            from: `"Shahidur Rahman Nayeem" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Message Received - Shahidur Rahman Nayeem',
            text: `
        Hi ${name},
        
        Thank you for reaching out! I have received your message regarding "${subject || 'your inquiry'}".
        
        I'll review your message and get back to you as soon as possible.
        
        Best regards,
        Shahidur Rahman Nayeem
      `,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #007bff;">Thank You for Contacting Me!</h2>
          <p>Hi ${name},</p>
          <p>I hope you're doing well.</p>
          <p>This is a confirmation that I've received your message regarding "<strong>${subject || 'your inquiry'}</strong>".</p>
          <p>I will get back to you as soon as I can. In the meantime, feel free to explore more of my work on my portfolio.</p>
          <br />
          <p>Best regards,</p>
          <p><strong>Shahidur Rahman Nayeem</strong></p>
          <hr />
          <p style="font-size: 12px; color: #777;">This is an automated response. Please do not reply directly to this email.</p>
        </div>
      `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(ownerMailOptions),
            transporter.sendMail(confirmationMailOptions)
        ]);

        return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
