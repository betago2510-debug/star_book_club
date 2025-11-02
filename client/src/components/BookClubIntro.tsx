import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function BookClubIntro() {
  const [, setLocation] = useLocation();

  return (
    <div className="bg-muted rounded-3xl px-3 py-3 sm:px-4 sm:py-4 md:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 w-full h-full min-w-0">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center truncate w-full" data-testid="text-intro-title">
        북클럽 소개
      </h2>
      <Button 
        variant="secondary"
        size="sm"
        onClick={() => setLocation("/empty")}
        data-testid="button-intro-more"
        className="text-xs sm:text-sm flex-shrink-0"
      >
        더보기
      </Button>
    </div>
  );
}
