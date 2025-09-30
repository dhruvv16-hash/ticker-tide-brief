import { NewsItem } from "@/components/NewsCard";
import { StockPick } from "@/components/StockRecommendations";

export const mockNewsData: NewsItem[] = [
  {
    id: "1",
    title: "Reliance Industries Announces Major Retail Expansion",
    summary: "Reliance Retail plans to open 500 new stores across tier-2 and tier-3 cities in India, focusing on JioMart and fashion retail. The expansion is backed by a ₹10,000 crore investment and aims to strengthen the company's position in the Indian retail market.",
    source: "Economic Times",
    timestamp: "2 hours ago",
    url: "https://economictimes.indiatimes.com",
    companies: ["Reliance Industries", "JioMart"],
    sentiment: "positive",
    sentimentScore: 0.78,
  },
  {
    id: "2",
    title: "TCS Wins Multi-Year Deal with Major European Bank",
    summary: "Tata Consultancy Services has secured a $1.2 billion contract to modernize the digital infrastructure of a leading European banking institution. The five-year deal includes cloud migration, AI integration, and cybersecurity enhancements.",
    source: "Business Standard",
    timestamp: "4 hours ago",
    url: "https://business-standard.com",
    companies: ["TCS", "Tata Consultancy Services"],
    sentiment: "positive",
    sentimentScore: 0.85,
  },
  {
    id: "3",
    title: "HDFC Bank Reports Strong Q3 Results",
    summary: "HDFC Bank posted a 20% YoY growth in net profit for Q3 FY25, driven by strong retail and corporate lending. The bank's asset quality improved with gross NPA declining to 1.24%. Management remains optimistic about credit growth in the coming quarters.",
    source: "Moneycontrol",
    timestamp: "5 hours ago",
    url: "https://moneycontrol.com",
    companies: ["HDFC Bank"],
    sentiment: "positive",
    sentimentScore: 0.82,
  },
  {
    id: "4",
    title: "Adani Ports Faces Environmental Concerns",
    summary: "Environmental groups have raised concerns about the ecological impact of Adani Ports' proposed expansion in coastal regions. The company faces regulatory scrutiny and potential delays in project approvals, which could affect near-term growth targets.",
    source: "LiveMint",
    timestamp: "6 hours ago",
    url: "https://livemint.com",
    companies: ["Adani Ports"],
    sentiment: "negative",
    sentimentScore: -0.52,
  },
  {
    id: "5",
    title: "ITC's FMCG Business Shows Resilient Growth",
    summary: "ITC's FMCG segment reported 12% revenue growth in recent quarter, outperforming industry averages. Strong performance in foods, personal care, and education & stationery products drove the growth. The company is investing heavily in brand building and distribution expansion.",
    source: "Financial Express",
    timestamp: "8 hours ago",
    url: "https://financialexpress.com",
    companies: ["ITC"],
    sentiment: "positive",
    sentimentScore: 0.71,
  },
  {
    id: "6",
    title: "Infosys Invests in AI Capabilities",
    summary: "Infosys announces a strategic investment of $2 billion over three years to enhance its AI and machine learning capabilities. The initiative includes setting up new AI labs in India and partnerships with leading tech companies for talent development.",
    source: "ET Markets",
    timestamp: "10 hours ago",
    url: "https://economictimes.indiatimes.com",
    companies: ["Infosys"],
    sentiment: "positive",
    sentimentScore: 0.76,
  },
];

export const mockStockPicks: StockPick[] = [
  {
    symbol: "RELIANCE.NS",
    company: "Reliance Industries Ltd",
    sector: "Energy & Retail",
    score: 0.78,
    signal: "buy",
    rationale: "Strong retail expansion backed by solid financials. Diversified portfolio reduces risk. FY26 capex guidance positive.",
    priceTarget: "₹2,850",
  },
  {
    symbol: "TCS.NS",
    company: "Tata Consultancy Services",
    sector: "IT Services",
    score: 0.85,
    signal: "buy",
    rationale: "Major European contract win. Strong deal pipeline. Digital transformation demand remains robust.",
    priceTarget: "₹4,200",
  },
  {
    symbol: "HDFCBANK.NS",
    company: "HDFC Bank",
    sector: "Banking & Finance",
    score: 0.82,
    signal: "buy",
    rationale: "Excellent Q3 results. Improving asset quality. Strong retail franchise and credit growth visibility.",
    priceTarget: "₹1,850",
  },
  {
    symbol: "INFY.NS",
    company: "Infosys Limited",
    sector: "IT Services",
    score: 0.76,
    signal: "buy",
    rationale: "Strategic AI investment positions company for future growth. Strong balance sheet supports expansion.",
    priceTarget: "₹1,950",
  },
  {
    symbol: "ITC.NS",
    company: "ITC Limited",
    sector: "FMCG",
    score: 0.71,
    signal: "monitor",
    rationale: "Resilient FMCG performance. Diversification strategy paying off. Watch for sustained growth trends.",
    priceTarget: "₹485",
  },
  {
    symbol: "ADANIPORTS.NS",
    company: "Adani Ports & SEZ",
    sector: "Infrastructure",
    score: 0.42,
    signal: "watch",
    rationale: "Environmental concerns and regulatory scrutiny pose near-term risks. Monitor approval processes.",
  },
];

export const generateDownloadData = (type: "news" | "picks") => {
  const timestamp = new Date().toISOString().split("T")[0];
  
  if (type === "news") {
    return {
      filename: `market-brief_${timestamp}.json`,
      data: {
        date: timestamp,
        version: "1.0",
        summaries: mockNewsData,
      },
    };
  } else {
    return {
      filename: `stock-picks_${timestamp}.json`,
      data: {
        date: timestamp,
        version: "1.0",
        recommendations: mockStockPicks,
      },
    };
  }
};

export const generateCSV = (type: "news" | "picks"): string => {
  if (type === "news") {
    const headers = ["Title", "Source", "Timestamp", "Companies", "Sentiment", "Score", "URL"];
    const rows = mockNewsData.map(item => [
      `"${item.title}"`,
      item.source,
      item.timestamp,
      `"${item.companies.join(", ")}"`,
      item.sentiment,
      item.sentimentScore,
      item.url,
    ]);
    return [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  } else {
    const headers = ["Symbol", "Company", "Sector", "Score", "Signal", "Rationale", "Price Target"];
    const rows = mockStockPicks.map(pick => [
      pick.symbol,
      `"${pick.company}"`,
      pick.sector,
      pick.score,
      pick.signal,
      `"${pick.rationale}"`,
      pick.priceTarget || "N/A",
    ]);
    return [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  }
};
