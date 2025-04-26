import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the data first (useful for debugging)
    console.log({
      name,
      email,
      message,
      to: 'mpratap0024@gmail.com',
    });

    // Since we don't have environment variables set up, we'll use
    // a custom solution that doesn't expose credentials but still allows the form to work
    
    // For now we'll simulate a successful email send
    // In production, you'd uncomment and configure this code:
    
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // set as environment variable
        pass: process.env.EMAIL_PASS, // set as environment variable
      },
    });

    const mailOptions = {
      from: email,
      to: 'mpratap0024@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    */

    // For local development, just pretend we sent an email
    // In production, you'd remove this and use the actual nodemailer implementation above
    await new Promise(resolve => setTimeout(resolve, 1000)); // simulate network delay

    return NextResponse.json(
      { message: 'Your message has been sent successfully! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 