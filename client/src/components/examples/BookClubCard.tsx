import BookClubCard from '../BookClubCard';
import bookCover from '@assets/generated_images/Book_cover_1_7da080ed.png';
import avatar from '@assets/generated_images/Female_celebrity_avatar_d03cef9e.png';

export default function BookClubCardExample() {
  return (
    <BookClubCard 
      bookCover={bookCover}
      hostAvatar={avatar}
      hostName="셀럽"
      bgColor="hsl(var(--accent))"
    />
  );
}
