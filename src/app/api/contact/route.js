import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Here, you would implement your email-sending logic.
    // For example, using a service like Cloudflare Email Routing or a third-party API.
    // You would use an API key stored as an environment variable for security.
    
    // For now, we'll just log the data and send a success response.
    console.log('Received form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Send a JSON response back to the client
    return NextResponse.json({
      message: 'Thank you for your message! I will get back to you shortly.',
      success: true,
    }, { status: 200 });

  } catch (error) {
    console.error('Form submission failed:', error);
    return NextResponse.json({
      message: 'An error occurred. Please try again later.',
      success: false,
    }, { status: 500 });
  }
}