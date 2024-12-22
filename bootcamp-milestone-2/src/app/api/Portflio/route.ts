import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import PortfolioModel from "@/database/projectSchema";

export async function GET() {
  await connectDB();

  try {
    const projects = await PortfolioModel.find();
    return NextResponse.json(projects, { status: 200 });
  } catch (err) {
    console.error("Error fetching projects:", err);
    return NextResponse.json(
      { message: "Server error fetching projects" },
      { status: 500 },
    );
  }
}
