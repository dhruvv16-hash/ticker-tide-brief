import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with 3D Animation */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 opacity-50" />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-glass border border-primary/20">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Live Market Intelligence</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
                Indian Market
                <br />
                Daily Brief
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                AI-powered news aggregation with sector-wise stock recommendations. 
                Curated daily for NSE & BSE markets with sentiment analysis.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/shorts">
                  <Button size="lg" className="group">
                    View News Shorts
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/stocks">
                  <Button variant="outline" size="lg">
                    Stock Recommendations
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground pt-4">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Updated daily at 6:00 PM IST
                </span>
              </div>
            </div>
            
            {/* Right: 3D Animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <div 
                data-us-project="WWIGMPx35aR19cyRVQ3B" 
                style={{ width: "100%", height: "500px", borderRadius: "1rem" }}
                className="relative z-10 shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/shorts" className="group">
            <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-glass border border-white/10 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">News Shorts</h3>
              <p className="text-muted-foreground text-sm">
                Curated daily summaries with sentiment analysis and company extraction
              </p>
            </div>
          </Link>

          <Link to="/stocks" className="group">
            <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-glass border border-white/10 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Stock Picks</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered sector-wise recommendations with confidence scores
              </p>
            </div>
          </Link>

          <Link to="/downloads" className="group">
            <div className="p-6 rounded-xl bg-gradient-card backdrop-blur-glass border border-white/10 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Download Reports</h3>
              <p className="text-muted-foreground text-sm">
                Export daily briefs and stock picks in JSON or CSV format
              </p>
            </div>
          </Link>
        </div>
      </section>

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
