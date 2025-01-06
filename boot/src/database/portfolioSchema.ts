import mongoose, { Schema } from 'mongoose';

type PortfolioProject = {
    name: string;
    description: string;
    image: string;
    link: string;
};

const portfolioSchema = new Schema<PortfolioProject>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
});

const PortfolioProject =
    mongoose.models['portfolio'] || mongoose.model('portfolio', portfolioSchema);

export default PortfolioProject;
