import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section 
      className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')` 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative w-full px-4 sm:px-6 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-2">
            About
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-md md:text-xl">
            <Link 
              to="/" 
              className="font-body text-primary hover:text-primary/80 transition font-medium"
            >
              Home
            </Link>
            <span className="text-white font-medium">|</span>
            <span className="font-body text-primary font-medium">
              About
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}