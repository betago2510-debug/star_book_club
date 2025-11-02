import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import QuoteSection from "@/components/QuoteSection";
import ClubAvatars from "@/components/ClubAvatars";
import BottomNavigation from "@/components/BottomNavigation";
import bannerImage from "@assets/generated_images/Celebrity_host_banner_34e76a18.png";
import avatar1 from "@assets/generated_images/Female_celebrity_avatar_d03cef9e.png";
import avatar2 from "@assets/generated_images/Young_male_celebrity_afaab8b7.png";
import avatar3 from "@assets/generated_images/Stylish_female_celebrity_4e98ee34.png";
import avatar4 from "@assets/generated_images/Male_celebrity_with_glasses_c4f153cb.png";

export default function Home() {
  // TODO: remove mock functionality
  const clubs = [
    { id: '1', name: '북클럽 이름', avatar: avatar1 },
    { id: '2', name: '북클럽 이름', avatar: avatar2 },
    { id: '3', name: '북클럽 이름', avatar: avatar3 },
    { id: '4', name: '북클럽 이름', avatar: avatar4 },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-4 flex items-center justify-center" style={{ height: 'calc((100vh - 120px) / 3)' }}>
          <HeroBanner image={bannerImage} title="북클럽 소개 (이미지)" />
        </div>
        <div className="p-4 flex items-center justify-center" style={{ height: 'calc((100vh - 120px) / 3)' }}>
          <QuoteSection text="오늘의 문장 (이미지)" />
        </div>
        <div className="p-4 flex items-center justify-center" style={{ height: 'calc((100vh - 120px) / 3)' }}>
          <ClubAvatars clubs={clubs} title="" />
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
