import { Quote } from "lucide-react";

interface QuoteSectionProps {
  text: string;
}

export default function QuoteSection({ text }: QuoteSectionProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 border border-muted-foreground/30 rounded-lg p-6">
      <Quote className="h-8 w-8 text-muted-foreground" data-testid="icon-quote" />
      <p 
        className="text-xl font-semibold text-center px-4"
        data-testid="text-quote"
      >
        {text}
      </p>
    </div>
  );
}
