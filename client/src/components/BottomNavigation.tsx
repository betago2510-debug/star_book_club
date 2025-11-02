import { Home, BookOpen, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export default function BottomNavigation() {
  const [location, setLocation] = useLocation();
  
  const navItems: NavItem[] = [
    { icon: <Home className="h-5 w-5" />, label: "홈", path: "/home" },
    { icon: <BookOpen className="h-5 w-5" />, label: "북클럽", path: "/bookclub" },
    { icon: <Sparkles className="h-5 w-5" />, label: "오늘의 문장", path: "/quote" },
    { icon: <User className="h-5 w-5" />, label: "마이 페이지", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex items-center px-4 py-2">
        {navItems.map((item, index) => {
          const isActive = location === item.path;
          return (
            <Button
              key={index}
              variant="ghost"
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2 px-1"
              onClick={() => setLocation(item.path)}
              data-testid={`button-nav-${item.label}`}
            >
              <div className={isActive ? "text-primary" : "text-muted-foreground"}>
                {item.icon}
              </div>
              <span 
                className={`text-xs ${isActive ? "text-primary font-semibold" : "text-muted-foreground"}`}
              >
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
