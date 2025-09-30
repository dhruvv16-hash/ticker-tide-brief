import { TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface StockPick {
  symbol: string;
  company: string;
  sector: string;
  score: number;
  signal: "buy" | "monitor" | "watch";
  rationale: string;
  priceTarget?: string;
}

interface StockRecommendationsProps {
  picks: StockPick[];
}

export const StockRecommendations = ({ picks }: StockRecommendationsProps) => {
  const getSignalVariant = (signal: string) => {
    switch (signal) {
      case "buy":
        return "success";
      case "monitor":
        return "default";
      default:
        return "neutral";
    }
  };

  const groupedBySector = picks.reduce((acc, pick) => {
    if (!acc[pick.sector]) {
      acc[pick.sector] = [];
    }
    acc[pick.sector].push(pick);
    return acc;
  }, {} as Record<string, StockPick[]>);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <BarChart3 className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold">Today's Top Picks</h2>
      </div>

      <div className="space-y-4">
        {Object.entries(groupedBySector).map(([sector, sectorPicks]) => (
          <Card key={sector}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                {sector}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sectorPicks.map((pick) => (
                <div
                  key={pick.symbol}
                  className="p-3 rounded-lg bg-secondary/40 backdrop-blur-glass border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {pick.symbol}
                        </span>
                        <Badge variant={getSignalVariant(pick.signal)} className="text-xs">
                          {pick.signal.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {pick.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-success font-semibold">
                        <ArrowUpRight className="w-3 h-3" />
                        <span className="text-sm">{pick.score.toFixed(2)}</span>
                      </div>
                      {pick.priceTarget && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Target: {pick.priceTarget}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pick.rationale}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
