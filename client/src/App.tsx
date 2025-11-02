import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import BookClub from "@/pages/bookclub";
import BookClubDetail from "@/pages/bookclub-detail";
import Payment from "@/pages/payment";
import TodaySentence from "@/pages/today-sentence";
import MyPage from "@/pages/mypage";
import Empty from "@/pages/empty";
import SearchResult from "@/pages/search-result";
import SearchResult1 from "@/pages/search-result-1";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/bookclub" component={BookClub} />
      <Route path="/bookclub/detail" component={BookClubDetail} />
      <Route path="/payment" component={Payment} />
      <Route path="/quote" component={TodaySentence} />
      <Route path="/profile" component={MyPage} />
      <Route path="/empty" component={Empty} />
      <Route path="/search-result" component={SearchResult} />
      <Route path="/search-result-1" component={SearchResult1} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
