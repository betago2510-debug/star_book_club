import { Home, BookOpen, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export default function BottomNavigation() {
  const navItems: NavItem[] = [
    { icon: <Home className="h-5 w-5" />, label: "홈", active: true },
    { icon: <BookOpen className="h-5 w-5" />, label: "북클럽" },
    { icon: <Sparkles className="h-5 w-5" />, label: "오늘의 문장" },
    { icon: <User className="h-5 w-5" />, label: "마이" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex items-center justify-around px-4 py-2">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex flex-col items-center gap-1 h-auto py-2 px-3"
            onClick={() => console.log(`Navigate to ${item.label}`)}
            data-testid={`button-nav-${item.label}`}
          >
            <div className={item.active ? "text-primary" : "text-muted-foreground"}>
              {item.icon}
            </div>
            <span 
              className={`text-xs ${item.active ? "text-primary font-semibold" : "text-muted-foreground"}`}
            >
              {item.label}
            </span>
          </Button>
        ))}
      </div>
    </nav>
  );
}
