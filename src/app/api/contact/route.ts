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

        const port = 465;
        // Clean up password (remove spaces and quotes if present)
        const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '').replace(/"/g, '') || '';

        // Transporter setup optimized for Hiworks
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: port,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: smtpPass,
            },
        });

        // Verify connection configuration
        try {
            await transporter.verify();
            console.log("SMTP Server is ready to take our messages");
        } catch (verifyError) {
            console.error("SMTP Verification failed:", verifyError);
            throw verifyError;
        }

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Recommended by Hiworks
            to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
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

        console.log(`Attempting to send email to: ${mailOptions.to}`);
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");

        return NextResponse.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Detailed Email send error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: `메일 발송 실패: ${errorMessage}` },
            { status: 500 }
        );
    }
}
