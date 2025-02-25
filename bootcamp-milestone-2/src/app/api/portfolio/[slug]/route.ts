import { NextResponse } from 'next/server';
import connectDB from '@/app/database/db'; // Ensure this path is correct for your project structure
import Portfolio from '@/app/database/portfolioschema'; 

export async function GET() {
  try {
    await connectDB(); // Make sure your MongoDB connection function is correct
    const portfolioEntries = await Portfolio.find(); // Adjust as necessary based on your model
    return NextResponse.json(portfolioEntries); // Return data as JSON
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch portfolio data" }, { status: 500 });
  }
}
