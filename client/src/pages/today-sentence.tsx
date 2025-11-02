import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

export default function TodaySentence() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-lg font-bold" data-testid="text-page-title">
            오늘의 문장 / 오늘의 책
          </h1>
        </div>

        <div 
          className="px-4 py-2 flex items-center justify-center" 
          style={{ height: 'calc((100vh - 180px) / 3)' }}
        >
          <div className="bg-card rounded-3xl w-full h-full p-6 flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm leading-relaxed" data-testid="text-sentence-1">
                당신에게 가장 중요한 때는 현재이며,<br />
                가장 중요한 일은<br />
                지금 하고 있는 일이며,<br />
                가장 중요한 사람은<br />
                지금 만나는 사람이다.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-card" />
              </div>
              <Button 
                variant="default"
                size="sm"
                onClick={() => setLocation("/empty")}
                data-testid="button-share-1"
              >
                공유하기
              </Button>
            </div>
          </div>
        </div>

        <div 
          className="px-4 py-2 flex items-center justify-center" 
          style={{ height: 'calc((100vh - 180px) / 3)' }}
        >
          <div className="bg-accent rounded-3xl w-full h-full p-6 flex items-center justify-between gap-4">
            <div className="w-24 flex-shrink-0">
              <div className="w-full aspect-[3/4] bg-muted rounded-lg" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-xs leading-relaxed" data-testid="text-book-intro">
                비가 올 것 같아<br />
                너는 소리 내어 웃었거든다.<br />
                흘러라는 가지 사이로<br />
                봄숲 바람의 형상이<br />
                드러나기라도 할 것처럼
              </p>
              <Button 
                variant="default"
                size="sm"
                onClick={() => setLocation("/empty")}
                data-testid="button-share-2"
                className="self-end"
              >
                공유하기
              </Button>
            </div>
          </div>
        </div>

        <div 
          className="px-4 py-2 flex items-center justify-center" 
          style={{ height: 'calc((100vh - 180px) / 3)' }}
        >
          <div className="bg-card rounded-3xl w-full h-full p-6 flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm leading-relaxed" data-testid="text-sentence-2">
                글을 쓰는 것은<br />
                아무것도 아니다.<br />
                다만이 해야 할 일은<br />
                다지기 앞에 앉아<br />
                피를 흘리는 것이다.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-card" />
              </div>
              <Button 
                variant="default"
                size="sm"
                onClick={() => setLocation("/empty")}
                data-testid="button-share-3"
              >
                공유하기
              </Button>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
