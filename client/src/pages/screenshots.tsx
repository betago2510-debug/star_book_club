import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";

interface PageInfo {
  path: string;
  name: string;
  filename: string;
}

const pages: PageInfo[] = [
  { path: "/", name: "랜딩 페이지", filename: "01-landing" },
  { path: "/home", name: "홈", filename: "02-home" },
  { path: "/bookclub", name: "북클럽 메인", filename: "03-bookclub" },
  { path: "/bookclub/detail", name: "북클럽 상세", filename: "04-bookclub-detail" },
  { path: "/payment", name: "결제", filename: "05-payment" },
  { path: "/quote", name: "오늘의 문장", filename: "06-today-sentence" },
  { path: "/profile", name: "마이페이지", filename: "07-mypage" },
  { path: "/search-result", name: "검색결과 (결과없음)", filename: "08-search-result" },
  { path: "/search-result-1", name: "검색결과 (김지성)", filename: "09-search-result-1" },
];

export default function Screenshots() {
  const [, setLocation] = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isCapturing, setIsCapturing] = useState(false);
  const [captured, setCaptured] = useState<Set<number>>(new Set());

  const capturePage = async (index: number) => {
    setIsCapturing(true);
    setCurrentPage(index);
    
    const page = pages[index];
    setLocation(page.path);
    
    setTimeout(async () => {
      try {
        const element = document.body;
        const canvas = await html2canvas(element, {
          backgroundColor: "#ffffff",
          width: 375,
          height: 812,
          windowWidth: 375,
          windowHeight: 812,
          scale: 2,
        });
        
        canvas.toBlob((blob) => {
          if (blob) {
            const link = document.createElement("a");
            link.download = `${page.filename}.png`;
            link.href = URL.createObjectURL(blob);
            link.click();
            
            setCaptured((prev: Set<number>) => new Set(prev).add(index));
            setIsCapturing(false);
          }
        });
      } catch (error) {
        console.error("Screenshot failed:", error);
        setIsCapturing(false);
      }
    }, 1000);
  };

  const captureAll = async () => {
    for (let i = 0; i < pages.length; i++) {
      await new Promise((resolve) => {
        capturePage(i);
        setTimeout(resolve, 3000);
      });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-6" data-testid="text-screenshots-title">
          페이지 스크린샷 다운로드
        </h1>
        
        <div className="mb-6">
          <Button
            onClick={captureAll}
            disabled={isCapturing}
            data-testid="button-capture-all"
            className="w-full mb-4"
          >
            {isCapturing ? "캡처 중..." : "모든 페이지 캡처 (자동)"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            모바일 화면 크기 (375x812)로 캡처됩니다
          </p>
        </div>

        <div className="space-y-2">
          {pages.map((page, index) => (
            <div
              key={page.path}
              className="flex items-center justify-between p-3 bg-card rounded-lg border"
            >
              <div className="flex-1">
                <p className="font-semibold">{page.name}</p>
                <p className="text-xs text-muted-foreground">{page.filename}.png</p>
              </div>
              <div className="flex items-center gap-2">
                {captured.has(index) && (
                  <span className="text-xs text-green-600">✓ 완료</span>
                )}
                <Button
                  onClick={() => capturePage(index)}
                  disabled={isCapturing}
                  size="sm"
                  data-testid={`button-capture-${index}`}
                >
                  {isCapturing && currentPage === index ? "캡처 중..." : "캡처"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
