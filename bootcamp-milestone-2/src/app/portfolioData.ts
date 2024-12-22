import connectDB from "./database/db"; // Import the database connection function
import Portfolio from "./database/portfolioSchema"; // Import the Portfolio model

// fetching from database

export async function getPortfolios(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const portfolios = await Portfolio.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return portfolios
	} catch (err) {
		console.error("Error fetching blogs:", err); // Log the error
    	return null;
	}
}