import { Newspaper } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";
import { mockNewsData } from "@/utils/mockData";
import { Navbar } from "@/components/Navbar";

const Shorts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">News Shorts</h1>
              <p className="text-muted-foreground mt-1">
                Curated daily summaries from NSE & BSE markets
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockNewsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shorts;
