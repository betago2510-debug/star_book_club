import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleMenuClick = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b border-border bg-background relative z-50">
        <h1 className="text-xl font-bold" data-testid="text-header-title">
          별책다방
        </h1>
        <Button 
          size="icon" 
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </header>

      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
            data-testid="menu-backdrop"
          />
          <div className="fixed top-16 right-4 bg-card border border-border rounded-lg shadow-lg z-50 py-2 min-w-[200px]">
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 hover-elevate"
              onClick={() => handleMenuClick("/bookclub")}
              data-testid="menu-item-bookclub"
            >
              북클럽
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 hover-elevate"
              onClick={() => handleMenuClick("/quote")}
              data-testid="menu-item-quote"
            >
              오늘의 문장
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 hover-elevate"
              onClick={() => handleMenuClick("/")}
              data-testid="menu-item-login"
            >
              로그인(아웃)
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 hover-elevate"
              onClick={() => handleMenuClick("/profile")}
              data-testid="menu-item-profile"
            >
              마이프로필
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 hover-elevate"
              onClick={() => handleMenuClick("/empty")}
              data-testid="menu-item-faq"
            >
              FAQ
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 hover-elevate"
              onClick={() => handleMenuClick("/empty")}
              data-testid="menu-item-contact"
            >
              이메일로 문의하기
            </Button>
          </div>
        </>
      )}
    </>
  );
}
