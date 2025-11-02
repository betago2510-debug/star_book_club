import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

export default function Payment() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div 
          className="px-4 py-2 flex items-center justify-center" 
          style={{ height: 'calc((100vh - 120px) / 2)' }}
        >
          <div className="bg-muted rounded-3xl w-full h-full flex flex-col items-center justify-center gap-6">
            <h2 className="text-3xl font-bold" data-testid="text-book-purchase">
              도서 구매하기
            </h2>
            <Button 
              variant="default"
              onClick={() => setLocation("/empty")}
              data-testid="button-purchase"
            >
              결제하기
            </Button>
          </div>
        </div>

        <div 
          className="px-4 py-2 flex items-center justify-center" 
          style={{ height: 'calc((100vh - 120px) / 2)' }}
        >
          <div className="bg-accent rounded-3xl w-full h-full flex flex-col items-center justify-center gap-6">
            <h2 className="text-3xl font-bold" data-testid="text-donation">
              북클럽 후원하기
            </h2>
            <Button 
              variant="default"
              onClick={() => setLocation("/empty")}
              data-testid="button-donate"
            >
              후원하기
            </Button>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
