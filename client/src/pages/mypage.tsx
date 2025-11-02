import { useLocation } from "wouter";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import avatar1 from "@assets/generated_images/Young_male_celebrity_afaab8b7.png";
import avatar2 from "@assets/generated_images/Stylish_female_celebrity_4e98ee34.png";

export default function MyPage() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    setLocation("/");
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      <main className="flex-1 overflow-y-auto pb-6">
        <div className="px-4 py-4 flex items-center justify-center" style={{ height: 'calc((100vh - 180px) / 3)' }}>
          <div className="w-full h-full relative" data-testid="container-profile-info">
            <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-2 border-border absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/20">
              <AvatarFallback>
                <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </AvatarFallback>
            </Avatar>
            
            <div className="rounded-3xl px-3 py-3 sm:px-4 sm:py-4 md:p-6 h-full relative ml-20 sm:ml-24 bg-card border border-border flex flex-col justify-between min-w-0">
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-0 h-0"
                style={{
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderRight: '12px solid hsl(var(--card))',
                }}
              />
              
              <div className="space-y-1 sm:space-y-2">
                <p className="text-sm sm:text-base md:text-lg font-semibold truncate" data-testid="text-profile-info-1">가입정보</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold truncate" data-testid="text-profile-info-2">별명</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold truncate" data-testid="text-profile-info-3">결제수단/연동계정</p>
              </div>
              
              <Button 
                variant="default"
                size="sm"
                onClick={handleLogout}
                data-testid="button-logout"
                className="self-end text-xs sm:text-sm mt-1"
              >
                로그아웃
              </Button>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 flex items-center justify-center" style={{ height: 'calc((100vh - 180px) / 3)' }}>
          <div className="rounded-3xl px-3 py-3 sm:px-4 sm:py-4 md:p-6 w-full h-full bg-card border border-border overflow-hidden">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4 truncate" data-testid="text-joined-clubs-title">
              가입한 북클럽
            </h3>
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-center overflow-x-auto">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 border-2 border-border">
                  <img src={avatar1} alt="북클럽" />
                </Avatar>
                <span className="text-xs text-center border border-border px-2 py-1 rounded-sm bg-background leading-tight whitespace-nowrap">
                  북클럽 이름
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 border-2 border-border">
                  <img src={avatar2} alt="북클럽" />
                </Avatar>
                <span className="text-xs text-center border border-border px-2 py-1 rounded-sm bg-background leading-tight whitespace-nowrap">
                  북클럽 이름
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 flex items-center justify-center" style={{ height: 'calc((100vh - 180px) / 3)' }}>
          <div className="rounded-3xl px-3 py-3 sm:px-4 sm:py-4 md:p-6 w-full h-full bg-card border border-border flex items-center justify-center overflow-hidden">
            <h3 className="text-base sm:text-lg font-bold text-center truncate w-full" data-testid="text-payment-history-title">
              결제 내역 / 배송 내역
            </h3>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
