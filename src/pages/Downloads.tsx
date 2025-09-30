import { Download, FileJson, FileSpreadsheet, FileText, Newspaper, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { generateDownloadData, generateCSV } from "@/utils/mockData";
import { Navbar } from "@/components/Navbar";

const Downloads = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Download Reports</h1>
              <p className="text-muted-foreground mt-1">
                Export daily summaries and stock recommendations
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="group hover:border-primary/30 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-primary" />
                Daily News Brief
              </CardTitle>
              <CardDescription>
                Curated news summaries with sentiment analysis and company mentions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="glass" 
                className="w-full justify-start"
                onClick={() => handleDownload("news", "json")}
              >
                <FileJson className="w-4 h-4" />
                Download as JSON
              </Button>
              <Button 
                variant="glass" 
                className="w-full justify-start"
                onClick={() => handleDownload("news", "csv")}
              >
                <FileSpreadsheet className="w-4 h-4" />
                Download as CSV
              </Button>
              <div className="pt-2 text-xs text-muted-foreground">
                Includes: Headlines, summaries, sentiment scores, companies, sources
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:border-primary/30 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-success" />
                Stock Recommendations
              </CardTitle>
              <CardDescription>
                AI-powered sector-wise stock picks with confidence scores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="glass" 
                className="w-full justify-start"
                onClick={() => handleDownload("picks", "json")}
              >
                <FileJson className="w-4 h-4" />
                Download as JSON
              </Button>
              <Button 
                variant="glass" 
                className="w-full justify-start"
                onClick={() => handleDownload("picks", "csv")}
              >
                <FileSpreadsheet className="w-4 h-4" />
                Download as CSV
              </Button>
              <div className="pt-2 text-xs text-muted-foreground">
                Includes: Symbols, sectors, signals, scores, rationale, targets
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-card backdrop-blur-glass border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Coming Soon: PDF Reports
              </CardTitle>
              <CardDescription>
                Professionally formatted PDF reports with charts and analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We're working on comprehensive PDF reports with visual analytics, 
                historical performance charts, and detailed rationale for each recommendation.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Downloads;
