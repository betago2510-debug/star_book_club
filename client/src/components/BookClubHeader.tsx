import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookClubHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-primary/10">
      <Button 
        size="icon" 
        variant="ghost"
        onClick={() => console.log("Menu clicked")}
        data-testid="button-menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
      <Button 
        size="icon" 
        variant="ghost"
        onClick={() => console.log("Search clicked")}
        data-testid="button-search"
      >
        <Search className="h-6 w-6" />
      </Button>
    </header>
  );
}
