import { useLocation } from "wouter";
import BookClubHeader from "@/components/BookClubHeader";
import BookClubCard from "@/components/BookClubCard";
import BottomNavigation from "@/components/BottomNavigation";
import bookCover1 from "@assets/generated_images/Botanical_book_cover_design_642d139d.png";
import avatar1 from "@assets/generated_images/Young_male_celebrity_afaab8b7.png";

export default function SearchResult1() {
  const [, setLocation] = useLocation();

  const club = {
    id: '1',
    bookCover: bookCover1,
    hostAvatar: avatar1,
    hostName: '셀럽1',
    bgColor: 'hsl(330 70% 85%)',
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <BookClubHeader />
      
      <main className="flex-1 overflow-y-auto pb-6">
        <div 
          className="px-4 py-4 flex items-center justify-center"
          style={{ height: 'calc(100vh - 180px)' }}
        >
          <BookClubCard 
            bookCover={club.bookCover}
            hostAvatar={club.hostAvatar}
            hostName={club.hostName}
            bgColor={club.bgColor}
            onMoreClick={() => setLocation("/bookclub/detail")}
          />
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
