import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function BookClubIntro() {
  const [, setLocation] = useLocation();

  return (
    <div className="bg-muted rounded-3xl p-6 flex items-end justify-between w-full h-full">
      <h2 className="text-2xl font-bold" data-testid="text-intro-title">
        북클럽 소개
      </h2>
      <Button 
        variant="secondary"
        onClick={() => setLocation("/empty")}
        data-testid="button-intro-more"
      >
        더보기
      </Button>
    </div>
  );
}
