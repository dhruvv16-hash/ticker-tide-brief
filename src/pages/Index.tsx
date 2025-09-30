import { useState, useEffect } from "react";
import { Download, FileJson, FileSpreadsheet, RefreshCw, TrendingUp, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/NewsCard";
import { StockRecommendations } from "@/components/StockRecommendations";
import { toast } from "sonner";
import { mockNewsData, mockStockPicks, generateDownloadData, generateCSV } from "@/utils/mockData";

const Index = () => {
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    updateTimestamp();
  }, []);

  const updateTimestamp = () => {
    const now = new Date();
    setLastUpdate(now.toLocaleString("en-IN", { 
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short"
    }));
  };

  const handleDownload = (type: "news" | "picks", format: "json" | "csv") => {
    try {
      let blob: Blob;
      let filename: string;

      if (format === "json") {
        const { data, filename: fname } = generateDownloadData(type);
        blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        filename = fname;
      } else {
        const csv = generateCSV(type);
        const timestamp = new Date().toISOString().split("T")[0];
        filename = `${type === "news" ? "market-brief" : "stock-picks"}_${timestamp}.csv`;
        blob = new Blob([csv], { type: "text/csv" });
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success(`Downloaded ${filename}`);
    } catch (error) {
      toast.error("Download failed. Please try again.");
    }
  };

  const handleRefresh = () => {
    updateTimestamp();
    toast.success("Data refreshed successfully");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with 3D Animation */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 opacity-50" />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-glass border border-primary/20">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Live Market Intelligence</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
                Indian Market
                <br />
                Daily Brief
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                AI-powered news aggregation with sector-wise stock recommendations. 
                Curated daily for NSE & BSE markets with sentiment analysis and company extraction.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Last updated: {lastUpdate}
                </span>
              </div>
            </div>
            
            {/* 3D Animation Container */}
            <div className="flex-1 w-full max-w-2xl">
              <div 
                data-us-project="WWIGMPx35aR19cyRVQ3B" 
                style={{ width: "100%", height: "400px", borderRadius: "1rem" }}
                className="shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-lg bg-card/30 backdrop-blur-glass border border-white/10">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Market Updates</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleRefresh}>
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleDownload("news", "json")}
            >
              <FileJson className="w-4 h-4" />
              News JSON
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleDownload("news", "csv")}
            >
              <FileSpreadsheet className="w-4 h-4" />
              News CSV
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleDownload("picks", "json")}
            >
              <FileJson className="w-4 h-4" />
              Picks JSON
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleDownload("picks", "csv")}
            >
              <FileSpreadsheet className="w-4 h-4" />
              Picks CSV
            </Button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Feed - Left Column (2/3) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 bg-gradient-primary rounded-full" />
              <h2 className="text-2xl font-bold">Today's Headlines</h2>
            </div>
            <div className="space-y-4">
              {mockNewsData.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>

          {/* Stock Recommendations - Right Column (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <StockRecommendations picks={mockStockPicks} />
              
              {/* Download Section */}
              <div className="mt-6 p-6 rounded-lg bg-gradient-card backdrop-blur-glass border border-white/10">
                <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <Download className="w-4 h-4 text-primary" />
                  Export Reports
                </h3>
                <div className="space-y-2">
                  <Button 
                    variant="glass" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => handleDownload("news", "json")}
                  >
                    <FileJson className="w-4 h-4" />
                    Daily Brief (JSON)
                  </Button>
                  <Button 
                    variant="glass" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => handleDownload("picks", "json")}
                  >
                    <FileJson className="w-4 h-4" />
                    Stock Picks (JSON)
                  </Button>
                  <Button 
                    variant="glass" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => handleDownload("news", "csv")}
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    Daily Brief (CSV)
                  </Button>
                  <Button 
                    variant="glass" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => handleDownload("picks", "csv")}
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    Stock Picks (CSV)
                  </Button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 p-4 rounded-lg bg-warning/10 border border-warning/20">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-warning">Disclaimer:</strong> This content is for educational purposes only. 
                  Not investment advice. Markets are subject to risk. Please consult a registered financial advisor 
                  before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Load UnicornStudio Script */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        `
      }} />
    </div>
  );
};

export default Index;
