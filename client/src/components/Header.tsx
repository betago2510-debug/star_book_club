import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-border bg-background">
      <h1 className="text-xl font-bold" data-testid="text-header-title">
        별책다방
      </h1>
      <Button 
        size="icon" 
        variant="ghost"
        onClick={() => console.log("Menu clicked")}
        data-testid="button-menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
}
