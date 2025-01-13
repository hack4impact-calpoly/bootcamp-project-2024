import PortfolioEntryPreview from "@/components/portfolioEntryPreview";
import connectDB from "@/database/database";
import PortfolioEntry from "@/database/portfolioEntrySchema";

async function getPortfolioEntries() {
  const url: string = process.env.PORTFOLIO_URI as string;

  await connectDB();
  try {
    console.log(PortfolioEntry.collection.name);
    const entries = await PortfolioEntry.find().sort({ date: -1 }).orFail();
    console.log(PortfolioEntry.collection.name);
    console.log(entries);

    const formattedEntries = entries.map((entry) => ({
      title: entry.title,
      description: entry.description,
      date: entry.date.toString(),
    }));

    return formattedEntries;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default async function Home() {
  const entries = await getPortfolioEntries();
  return (
    <div>
      <div className="border-wrap">
        <h1 className="page-title">Portfolio</h1>
        <div id="portfolio-container">
          {entries != null ? (
            entries.map((entry) => <PortfolioEntryPreview {...entry} />)
          ) : (
            <p>No portfolio entries available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
