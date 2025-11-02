import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Club {
  id: string;
  name: string;
  avatar: string;
}

interface ClubAvatarsProps {
  clubs: Club[];
  title: string;
}

export default function ClubAvatars({ clubs, title }: ClubAvatarsProps) {
  return (
    <div className="py-6">
      <h3 
        className="text-sm font-semibold text-primary mb-4 px-4"
        data-testid="text-clubs-title"
      >
        {title}
      </h3>
      <div className="flex gap-4 px-4 overflow-x-auto pb-2">
        {clubs.map((club, index) => (
          <div 
            key={club.id}
            className="flex flex-col items-center gap-2 min-w-[70px]"
            data-testid={`club-avatar-${index}`}
          >
            <Avatar className="h-16 w-16 border-2 border-border">
              <AvatarImage src={club.avatar} alt={club.name} />
              <AvatarFallback>{club.name[0]}</AvatarFallback>
            </Avatar>
            <span 
              className="text-xs text-center border border-border px-2 py-1 rounded-sm bg-card"
              data-testid={`text-club-name-${index}`}
            >
              {club.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
