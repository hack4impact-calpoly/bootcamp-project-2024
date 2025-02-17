import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import PortfolioModel, { ProjectItem } from '@/database/portfolioSchema';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  console.log("GET request to fetch project by slug");
  await connectDB(); // Ensure MongoDB is connected

  const { slug } = await params; // Destructure slug from params

  try {
    // Fetch project by slug directly from the collection
    const project = await PortfolioModel.findOne({ slug }).orFail(); // Find project by slug

    return NextResponse.json(project); // Return the project
  } catch (err) {
    console.error("Error finding project:", err);
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  console.log("POST request to add a project or project-related data");
  await connectDB(); // Ensure MongoDB is connected

  const { slug } = await params; // Destructure slug from params
  const body = await req.json(); // Parse request body

  try {
    // Validate the body
    const { title, description, technologies, repository } = body;

    if (!title) {
      return NextResponse.json({ error: "Project title is required" }, { status: 400 });
    }

    // Construct the new project object
    const newProject: ProjectItem = {
      title,
      description,
      technologies: technologies || [],
      repository: repository || "",
      slug, // Set slug for the new project
    };

    // Create a new project document
    const createdProject = await PortfolioModel.create(newProject);

    return NextResponse.json({ message: "Project added successfully", project: createdProject });
  } catch (err) {
    console.error("Error adding project:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
