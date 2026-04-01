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
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (MUST match SMTP_USER for Hiworks)
            replyTo: email, // Reply to the user who filled the form
            // Support both English and Korean environment variable names caused by browser translation
            to: process.env.CONTACT_RECEIVER_EMAIL || (process.env as any)['연락처_수신자_이메일'] || "info@asbsquash.co.kr", 
            cc: process.env.SMTP_USER, // debug: send a copy to the sender to verify delivery (Used in previous project)
            subject: `[ASB Website Inquiry] New message from ${name} - ${companyName}`,
            text: `
                Name: ${name}
                Company: ${companyName}
                Job Title: ${jobTitle}
                Email: ${email}
                Phone: ${telephone}
                Type: ${inquiryType}
                Product Interest: ${productInterest}
                
                Message:
                ${message}
            `,
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
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${message}
        </div>
      `,
        };

        console.log(`Attempting to send email to: ${mailOptions.to} (CC: ${mailOptions.cc})`);
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
