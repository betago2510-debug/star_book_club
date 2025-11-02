import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import hostAvatarUrl from "@assets/generated_images/Young_male_celebrity_afaab8b7.png";

export default function BookClubDetail() {
  return (
    <div className="flex flex-col h-screen bg-[#87CEEB]">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-2 flex items-center gap-3">
          <Avatar className="h-20 w-20 border-2 border-border">
            <AvatarImage src={hostAvatarUrl} alt="아이유" />
            <AvatarFallback>아이유</AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-bold" data-testid="text-club-title">
            아이유의 북클럽
          </h1>
        </div>

        <div 
          className="p-4 flex items-center justify-center" 
          style={{ height: 'calc((100vh - 180px) / 3)' }}
        >
          <div className="bg-[#DDA0DD] rounded-3xl w-full h-full flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white" data-testid="text-greeting">
              인사말
            </h2>
          </div>
        </div>

        <div 
          className="px-4 flex items-center justify-center" 
          style={{ height: 'calc((100vh - 180px) / 3)' }}
        >
          <div className="bg-[#F4A460] rounded-3xl w-full h-full flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white" data-testid="text-guide">
              이용 안내
            </h2>
          </div>
        </div>

        <div 
          className="px-4 pb-2 flex items-center justify-center" 
          style={{ height: 'calc((100vh - 180px) / 3)' }}
        >
          <div className="bg-[#90EE90] rounded-3xl w-full h-full flex flex-col items-center justify-center gap-6">
            <h2 className="text-3xl font-bold" data-testid="text-curriculum">
              커리큘럼
            </h2>
            <Button 
              className="bg-[#4FC3F7] hover:bg-[#3BB5E8] text-white px-6"
              data-testid="button-past-clubs"
            >
              +지난 북클럽 보기
            </Button>
          </div>
        </div>

        <div className="px-4 pb-4 flex gap-2">
          <Button 
            className="flex-1 bg-[#FF8C00] hover:bg-[#E67E00] text-white"
            data-testid="button-comment"
          >
            댓글쓰기
          </Button>
          <Button 
            className="flex-1 bg-[#FF69B4] hover:bg-[#E65AA5] text-white"
            data-testid="button-share"
          >
            공유하기
          </Button>
          <Button 
            className="flex-1 bg-[#4FC3F7] hover:bg-[#3BB5E8] text-white"
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
