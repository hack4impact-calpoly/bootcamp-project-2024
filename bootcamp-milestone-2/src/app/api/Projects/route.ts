// app/api/Projects/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

export async function GET() {
  try {
    await connectDB();

    const projects = await ProjectModel.find({});

    if (!projects) {
      return NextResponse.json(
        { message: "No projects found" },
        { status: 404 }
      );
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
