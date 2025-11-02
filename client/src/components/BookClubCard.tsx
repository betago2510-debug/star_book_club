import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface BookClubCardProps {
  bookCover: string;
  hostAvatar: string;
  hostName: string;
  bgColor: string;
}

export default function BookClubCard({ bookCover, hostAvatar, hostName, bgColor }: BookClubCardProps) {
  return (
    <div 
      className="rounded-lg p-4 flex gap-4 relative"
      style={{ backgroundColor: bgColor }}
      data-testid="container-bookclub-card"
    >
      <Avatar className="h-16 w-16 border-2 border-border absolute left-4 top-1/2 -translate-y-1/2">
        <AvatarImage src={hostAvatar} alt={hostName} />
        <AvatarFallback>{hostName[0]}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 flex gap-4 ml-20">
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
            onClick={() => console.log("More clicked")}
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
