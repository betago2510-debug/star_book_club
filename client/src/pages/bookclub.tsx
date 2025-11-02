import BookClubHeader from "@/components/BookClubHeader";
import BookClubIntro from "@/components/BookClubIntro";
import BookClubCard from "@/components/BookClubCard";
import BottomNavigation from "@/components/BottomNavigation";
import bookCover1 from "@assets/generated_images/Book_cover_1_7da080ed.png";
import bookCover2 from "@assets/generated_images/Book_cover_2_fee37278.png";
import avatar1 from "@assets/generated_images/Young_male_celebrity_afaab8b7.png";
import avatar2 from "@assets/generated_images/Stylish_female_celebrity_4e98ee34.png";

export default function BookClub() {
  // TODO: remove mock functionality
  const clubs = [
    {
      id: '1',
      bookCover: bookCover1,
      hostAvatar: avatar1,
      hostName: '셀럽1',
      bgColor: 'hsl(330 70% 85%)',
    },
    {
      id: '2',
      bookCover: bookCover2,
      hostAvatar: avatar2,
      hostName: '셀럽2',
      bgColor: 'hsl(25 80% 80%)',
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      <BookClubHeader />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-4 flex items-center justify-center" style={{ height: 'calc((100vh - 120px) / 3)' }}>
          <BookClubIntro />
        </div>
        
        {clubs.map((club) => (
          <div 
            key={club.id}
            className="p-4 flex items-center justify-center" 
            style={{ height: 'calc((100vh - 120px) / 3)' }}
          >
            <BookClubCard 
              bookCover={club.bookCover}
              hostAvatar={club.hostAvatar}
              hostName={club.hostName}
              bgColor={club.bgColor}
            />
          </div>
        ))}
      </main>

      <BottomNavigation />
    </div>
  );
}
