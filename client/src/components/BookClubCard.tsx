import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface BookClubCardProps {
  bookCover: string;
  hostAvatar: string;
  hostName: string;
  bgColor: string;
  onMoreClick?: () => void;
}

export default function BookClubCard({ bookCover, hostAvatar, hostName, bgColor, onMoreClick }: BookClubCardProps) {
  const [, setLocation] = useLocation();

  const handleMoreClick = () => {
    if (onMoreClick) {
      onMoreClick();
    } else {
      setLocation("/empty");
    }
  };

  return (
    <div className="w-full h-full relative" data-testid="container-bookclub-card">
      <Avatar className="h-20 w-20 border-2 border-border absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <AvatarImage src={hostAvatar} alt={hostName} />
        <AvatarFallback>{hostName[0]}</AvatarFallback>
      </Avatar>
      
      <div 
        className="rounded-3xl p-6 flex gap-4 h-full relative ml-10"
        style={{ 
          backgroundColor: bgColor,
        }}
      >
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-0 h-0"
          style={{
            borderTop: '12px solid transparent',
            borderBottom: '12px solid transparent',
            borderRight: `12px solid ${bgColor}`,
          }}
        />
        
        <div className="w-24 flex-shrink-0">
          <img 
            src={bookCover} 
            alt="Book cover"
            className="w-full h-auto rounded-md shadow-md"
            data-testid="img-book-cover"
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-between py-2">
          <div className="space-y-1">
            <p className="text-sm font-semibold" data-testid="text-club-info-1">인사말</p>
            <p className="text-sm font-semibold" data-testid="text-club-info-2">이용안내</p>
            <p className="text-sm font-semibold" data-testid="text-club-info-3">커리큘럼</p>
          </div>
          <Button 
            variant="secondary"
            size="sm"
            onClick={handleMoreClick}
            data-testid="button-card-more"
            className="self-end"
          >
            더보기
          </Button>
        </div>
      </div>
    </div>
  );
}
