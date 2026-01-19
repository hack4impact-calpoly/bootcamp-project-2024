import mongoose, { Schema } from "mongoose";



// typescript type (can also be an interface)
export type IProject = {
	title: string;
    image: string;
    imageAlt: string;
    details: string;
	link: string; 
    date: Date;
	comments: IComment[];
};

type IComment = {
    user: string,
    comment: string;
    date: Date;
}

// mongoose schema 
const projectSchema = new Schema<IProject>({
	title: { type: String, required: true },
	image: { type: String, required: true },
	imageAlt: { type: String, required: true},
	details: { type: String, required: true },
	link: { type: String, required: true },
    date: {type: Date, required: false, default: new Date()},
	comments: {},
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default Project;