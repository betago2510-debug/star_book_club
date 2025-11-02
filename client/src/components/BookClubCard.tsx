import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface BookClubCardProps {
  bookCover: string;
  hostAvatar: string;
  hostName: string;
  bgColor: string;
  onMoreClick?: () => void;
  text1?: string;
  text2?: string;
  text3?: string;
  text1Bold?: boolean;
  text2Italic?: boolean;
  text3Italic?: boolean;
}

export default function BookClubCard({ bookCover, hostAvatar, hostName, bgColor, onMoreClick, text1 = "인사말", text2 = "이용안내", text3 = "커리큘럼", text1Bold = false, text2Italic = false, text3Italic = false }: BookClubCardProps) {
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
      <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-2 border-border absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <AvatarImage src={hostAvatar} alt={hostName} />
        <AvatarFallback>{hostName[0]}</AvatarFallback>
      </Avatar>
      
      <div 
        className="rounded-3xl px-3 py-3 sm:px-4 sm:py-4 md:p-6 flex gap-2 sm:gap-3 md:gap-4 h-full relative ml-20 sm:ml-24"
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
        
        <div className="w-20 sm:w-24 md:w-28 flex-shrink-0 h-full flex items-center">
          <img 
            src={bookCover} 
            alt="Book cover"
            className="w-full h-auto max-h-full rounded-md shadow-md object-contain"
            data-testid="img-book-cover"
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-between items-center py-1 sm:py-2 min-w-0">
          <div className="space-y-0.5 sm:space-y-1 w-full flex-1 flex flex-col justify-center">
            <p className={`text-xs sm:text-sm font-semibold text-center truncate ${text1Bold ? 'font-bold' : ''}`} data-testid="text-club-info-1">{text1}</p>
            <p className={`text-xs sm:text-sm font-semibold text-center truncate ${text2Italic ? 'italic' : ''}`} data-testid="text-club-info-2">{text2}</p>
            <p className={`text-xs sm:text-sm font-semibold text-center truncate ${text3Italic ? 'italic' : ''}`} data-testid="text-club-info-3">{text3}</p>
          </div>
          <Button 
            variant="secondary"
            size="sm"
            onClick={handleMoreClick}
            data-testid="button-card-more"
            className="text-xs sm:text-sm"
          >
            더보기
          </Button>
        </div>
      </div>
    </div>
  );
}
