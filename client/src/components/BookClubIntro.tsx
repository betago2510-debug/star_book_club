import { Button } from "@/components/ui/button";

export default function BookClubIntro() {
  return (
    <div className="bg-muted rounded-lg p-6 flex items-end justify-between min-h-[180px]">
      <h2 className="text-2xl font-bold" data-testid="text-intro-title">
        북클럽 소개
      </h2>
      <Button 
        variant="secondary"
        onClick={() => console.log("More info clicked")}
        data-testid="button-intro-more"
      >
        더보기
      </Button>
    </div>
  );
}
