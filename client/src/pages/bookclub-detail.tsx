import { useLocation } from "wouter";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import hostAvatarUrl from "@assets/generated_images/Young_male_celebrity_afaab8b7.png";

export default function BookClubDetail() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      <main className="flex-1 overflow-y-auto pb-6">
        <div className="px-4 pt-4 pb-2 flex items-center gap-2 sm:gap-3 min-w-0">
          <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-2 border-border flex-shrink-0">
            <AvatarImage src={hostAvatarUrl} alt="김지성" />
            <AvatarFallback>김지성</AvatarFallback>
          </Avatar>
          <h1 className="text-lg sm:text-xl font-bold truncate" data-testid="text-club-title">
            김지성의 북클럽
          </h1>
        </div>

        <div 
          className="px-4 py-2 flex items-center justify-center" 
          style={{ height: '200px' }}
        >
          <div className="bg-muted rounded-3xl w-full h-full flex items-center justify-center px-3 py-3 overflow-hidden">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center" data-testid="text-greeting">
              인사말
            </h2>
          </div>
        </div>

        <div 
          className="px-4 py-2 flex items-center justify-center" 
          style={{ height: '200px' }}
        >
          <div className="bg-accent rounded-3xl w-full h-full flex items-center justify-center px-3 py-3 overflow-hidden">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center" data-testid="text-guide">
              이용 안내
            </h2>
          </div>
        </div>

        <div 
          className="px-4 py-2 flex items-center justify-center" 
          style={{ height: '200px' }}
        >
          <div className="bg-secondary rounded-3xl w-full h-full flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 px-3 py-3 overflow-hidden">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center" data-testid="text-curriculum">
              커리큘럼
            </h2>
            <Button 
              size="sm"
              className="bg-primary/30 hover:bg-primary/40 text-foreground border-primary/30 text-xs sm:text-sm"
              onClick={() => setLocation("/empty")}
              data-testid="button-past-clubs"
            >
              +지난 북클럽 보기
            </Button>
          </div>
        </div>

        <div className="px-4 pt-4 pb-4 flex gap-2">
          <Button 
            className="flex-1 min-w-0 text-xs sm:text-sm"
            variant="secondary"
            onClick={() => setLocation("/empty")}
            data-testid="button-comment"
          >
            댓글쓰기
          </Button>
          <Button 
            className="flex-1 min-w-0 text-xs sm:text-sm"
            variant="default"
            onClick={() => setLocation("/empty")}
            data-testid="button-share"
          >
            공유하기
          </Button>
          <Button 
            className="flex-1 min-w-0 text-xs sm:text-sm"
            variant="outline"
            onClick={() => setLocation("/payment")}
            data-testid="button-payment"
          >
            결제하기
          </Button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
