import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/database";
import portfolioEntrySchema from "@/database/portfolioEntrySchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const portfolioEntry = await portfolioEntrySchema
      .findOne({ slug })
      .orFail();
    return NextResponse.json(portfolioEntry);
  } catch {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
