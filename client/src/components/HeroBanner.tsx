interface HeroBannerProps {
  image: string;
  title: string;
}

export default function HeroBanner({ image, title }: HeroBannerProps) {
  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-lg"
      data-testid="container-hero-banner"
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-end px-8">
        <h2 
          className="text-2xl font-bold text-white"
          data-testid="text-banner-title"
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
