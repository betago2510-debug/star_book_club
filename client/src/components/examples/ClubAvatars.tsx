import ClubAvatars from '../ClubAvatars';
import avatar1 from '@assets/generated_images/Female_celebrity_avatar_d03cef9e.png';
import avatar2 from '@assets/generated_images/Young_male_celebrity_afaab8b7.png';
import avatar3 from '@assets/generated_images/Stylish_female_celebrity_4e98ee34.png';
import avatar4 from '@assets/generated_images/Male_celebrity_with_glasses_c4f153cb.png';

export default function ClubAvatarsExample() {
  const clubs = [
    { id: '1', name: '북클럽 이름', avatar: avatar1 },
    { id: '2', name: '북클럽 이름', avatar: avatar2 },
    { id: '3', name: '북클럽 이름', avatar: avatar3 },
    { id: '4', name: '북클럽 이름', avatar: avatar4 },
  ];

  return <ClubAvatars clubs={clubs} title="등록중 등록중" />;
}
