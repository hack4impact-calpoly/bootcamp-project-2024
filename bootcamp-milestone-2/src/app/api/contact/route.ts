import { NextResponse } from 'next/server';
import emailjs from 'emailjs-com';

export async function POST(request: Request) {
  const formData = await request.json();

  const { to_name, from_name, message } = formData;

  try {
    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_0myvm2k';
    const templateID = 'template_3v4nxrm';
    const userID = 'iL4LZOGlyB5AUufx-';

    console.log('Sending email with data:', { to_name, from_name, message });

    // Send email using EmailJS
    const result = await emailjs.send(serviceID, templateID, {
      to_name,
      from_name,
      message,
    }, userID);

    console.log('Email sent successfully:', result);
    return NextResponse.json({ status: 'success', message: 'Email sent successfully!' });
  } catch (error) {
    // Type assertion to make error of type Error
    const typedError = error as Error;
    console.error('Error sending email:', typedError.message);
    return NextResponse.json({ status: 'error', message: `Error sending email: ${typedError.message}` });
  }
}
