export const runtime = 'edge'; // This is the new line

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('get');
    
    console.log('Received form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
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
