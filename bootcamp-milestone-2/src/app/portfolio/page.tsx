import styles from "./portfolio.module.css";
import { getPortfolios } from "../portfolioData";

export default async function PortfolioListPage() {
  const portfolios = await getPortfolios();

  if (!portfolios) {
    return <p>Failed to fetch portfolios or no portfolios available.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio List</h1>
      <ul className={styles.list}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {portfolios.map((portfolio: any) => (
          <li key={portfolio.slug} className={styles.listItem}>
            <small>{new Date(portfolio.date).toLocaleDateString()}</small>
            <h2>{portfolio.title}</h2>
            <p>{portfolio.description}</p>
            {/* <p></p> */}
            <a href={`/portfolio/${portfolio.slug}`} className={styles.link}>
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
