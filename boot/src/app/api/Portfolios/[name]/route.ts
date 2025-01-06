import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import PortfolioProject from '@/database/portfolioSchema';

type IParams = {
    params: {
        name: string;
    };
};

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { name } = params;

    try {
        const project = await PortfolioProject.findOne({ name }).orFail();
        return NextResponse.json(project);
    } catch (error) {
        console.error(error)

        return NextResponse.json('Project not found.', { status: 404 });
    }
}
