import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

export default function SearchResult() {
  const [, setLocation] = useLocation();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 
          className="text-[30px] font-bold text-center mb-12"
          data-testid="text-empty-message"
        >
          해당 검색 결과를<br />찾을 수 없습니다.
        </h1>
        
        <Button
          variant="outline"
          size="lg"
          onClick={handleGoBack}
          data-testid="button-go-back"
          className="rounded-full px-8"
        >
          이전 페이지로 돌아가기
        </Button>
      </main>

      <BottomNavigation />
    </div>
  );
}
