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
    <div className="w-full h-full flex flex-col justify-center">
      <h3 
        className="text-sm font-semibold text-primary mb-4 px-4"
        data-testid="text-clubs-title"
      >
        {title}
      </h3>
      <div className="flex gap-4 px-4 justify-center items-center flex-wrap">
        {clubs.map((club, index) => (
          <div 
            key={club.id}
            className="flex flex-col items-center gap-2 min-w-[70px] relative"
            data-testid={`club-avatar-${index}`}
          >
            <Avatar className="h-16 w-16 border-2 border-border">
              <AvatarImage src={club.avatar} alt={club.name} />
              <AvatarFallback>{club.name[0]}</AvatarFallback>
            </Avatar>
            {index < 2 && (
              <span 
                className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs text-center bg-primary text-primary-foreground px-2 py-0.5 rounded-sm whitespace-nowrap"
                data-testid={`badge-registering-${index}`}
              >
                등록중
              </span>
            )}
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
