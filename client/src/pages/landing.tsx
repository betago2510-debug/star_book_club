import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Cozy_cafe_reading_atmosphere_1d9f7e31.png";

export default function Landing() {
  const [, setLocation] = useLocation();

  const handleLogin = () => {
    setLocation("/home");
  };

  const handleBrowse = () => {
    console.log("Browse triggered");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-5xl font-bold text-white sm:text-6xl md:text-7xl"
              data-testid="text-app-title"
            >
              별책다방
            </h1>
            <p 
              className="text-lg text-white/90 sm:text-xl md:text-2xl font-normal"
              data-testid="text-app-subtitle"
            >
              셀럽과 함께 책을 읽고 성장하는 북클럽
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 pt-8">
            <Button
              size="lg"
              className="h-14 text-base sm:text-lg font-semibold bg-primary text-primary-foreground border border-primary-border hover-elevate active-elevate-2 rounded-full px-8"
              onClick={handleLogin}
              data-testid="button-login"
            >
              간편 로그인으로 시작하기
            </Button>
            
            <Button
              size="lg"
              variant="ghost"
              className="h-14 text-base sm:text-lg font-semibold text-white/90 border border-white/20 backdrop-blur-sm bg-white/10 hover-elevate active-elevate-2 rounded-full px-8"
              onClick={handleBrowse}
              data-testid="button-browse"
            >
              둘러보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
