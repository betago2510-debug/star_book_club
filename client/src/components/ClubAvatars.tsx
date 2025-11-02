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
      {title && (
        <h3 
          className="text-sm font-semibold text-primary mb-4 px-4"
          data-testid="text-clubs-title"
        >
          {title}
        </h3>
      )}
      <div className="overflow-x-auto px-4">
        <div className="flex gap-4 justify-center md:justify-center min-w-max md:min-w-0 pt-6">
          {clubs.map((club, index) => (
            <div 
              key={club.id}
              className="flex flex-col items-center gap-2 w-[70px] relative"
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
                className="text-xs text-center border border-border px-2 py-1 rounded-sm bg-card leading-tight"
                data-testid={`text-club-name-${index}`}
              >
                북클럽<br />이름
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
