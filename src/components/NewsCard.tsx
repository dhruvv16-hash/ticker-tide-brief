import { ExternalLink, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  url: string;
  companies: string[];
  sentiment: "positive" | "negative" | "neutral";
  sentimentScore: number;
}

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const getSentimentIcon = () => {
    switch (news.sentiment) {
      case "positive":
        return <TrendingUp className="w-4 h-4" />;
      case "negative":
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getSentimentVariant = () => {
    switch (news.sentiment) {
      case "positive":
        return "success";
      case "negative":
        return "destructive";
      default:
        return "neutral";
    }
  };

  const handleRedirect = () => {
    window.open(news.url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="group overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {news.title}
          </CardTitle>
          <Badge variant={getSentimentVariant()} className="shrink-0">
            {getSentimentIcon()}
            <span className="ml-1">{news.sentimentScore.toFixed(2)}</span>
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
          <span className="font-medium">{news.source}</span>
          <span>•</span>
          <span>{news.timestamp}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {news.summary}
        </p>
        
        {news.companies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {news.companies.map((company, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {company}
              </Badge>
            ))}
          </div>
        )}

        <Button 
          variant="glass" 
          size="sm" 
          className="w-full"
          onClick={handleRedirect}
        >
          Read Full Article
          <ExternalLink className="w-3 h-3 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};
