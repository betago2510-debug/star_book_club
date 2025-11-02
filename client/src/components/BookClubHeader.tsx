import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function BookClubHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const handleMenuClick = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation("/empty");
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-primary/10 relative z-50">
        <Button 
          size="icon" 
          variant="ghost"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          data-testid="button-search"
        >
          {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-6 w-6" />}
        </Button>
        <Button 
          size="icon" 
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>

      {isSearchOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={handleSearchClose}
            data-testid="search-backdrop"
          />
          <div className="fixed top-14 left-2 right-2 bg-card border border-border rounded-md shadow-lg z-50 p-3 max-w-md mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                autoFocus
                data-testid="input-search"
              />
              <Button 
                type="submit" 
                size="sm"
                disabled={!searchQuery.trim()}
                data-testid="button-search-submit"
              >
                검색
              </Button>
            </form>
          </div>
        </>
      )}

      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
            data-testid="menu-backdrop"
          />
          <div className="fixed top-14 right-2 bg-card border border-border rounded-md shadow-lg z-50 py-1 w-[140px]">
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm hover-elevate"
              onClick={() => handleMenuClick("/bookclub")}
              data-testid="menu-item-bookclub"
            >
              북클럽
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm hover-elevate"
              onClick={() => handleMenuClick("/quote")}
              data-testid="menu-item-quote"
            >
              오늘의 문장
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm hover-elevate"
              onClick={() => handleMenuClick("/")}
              data-testid="menu-item-login"
            >
              로그인(아웃)
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm hover-elevate"
              onClick={() => handleMenuClick("/profile")}
              data-testid="menu-item-profile"
            >
              마이프로필
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm hover-elevate"
              onClick={() => handleMenuClick("/empty")}
              data-testid="menu-item-faq"
            >
              FAQ
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 text-sm hover-elevate"
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
