import connectDB from "@/database/db"
import Project from "@/database/projectSchema"



async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Project.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
		console.log(err)
	    return null
	}
}

const projects = await getProjects();
export default projects;