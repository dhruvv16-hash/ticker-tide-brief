import { BarChart3 } from "lucide-react";
import { StockRecommendations } from "@/components/StockRecommendations";
import { mockStockPicks } from "@/utils/mockData";
import { Navbar } from "@/components/Navbar";

const Stocks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Stock Recommendations</h1>
              <p className="text-muted-foreground mt-1">
                AI-powered sector-wise picks for today's market
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <StockRecommendations picks={mockStockPicks} />
          
          <div className="mt-8 p-4 rounded-lg bg-warning/10 border border-warning/20">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-warning">Disclaimer:</strong> This content is for educational purposes only. 
              Not investment advice. Markets are subject to risk. Please consult a registered financial advisor 
              before making investment decisions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stocks;
