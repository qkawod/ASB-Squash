import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, companyName, jobTitle, email, telephone, inquiryType, productInterest, message } = body;

        // Validation
        if (!name || !companyName || !email || !telephone || !inquiryType || !productInterest || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Transporter setup
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Receiver address
            replyTo: email,
            subject: `[ASB Website Inquiry] New message from ${name}`,
            html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Job Title:</strong> ${jobTitle || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${telephone}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Product Interest:</strong> ${productInterest}</p>
        <br/>
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
