import Image from "next/image";

// Mix of Katie's real photos + Unsplash stock
const galleryImages = [
  { src: "/photos/photo_01.jpg", alt: "Photography session", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800", alt: "Family at beach" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800", alt: "Engagement couple" },
  { src: "/photos/photo_02.jpg", alt: "Photography session", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800", alt: "Newborn" },
  { src: "https://images.unsplash.com/photo-1537365587684-f490102e1225?w=800", alt: "Maternity" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800", alt: "Wedding" },
  { src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800", alt: "Beach portrait", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800", alt: "Children at beach" },
  { src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800", alt: "Family sunset" },
  { src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800", alt: "Pet portrait" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#faf6f1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a28d] mb-4">The Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#3d2e26] mb-6">
            Gallery
          </h2>
          <div className="w-12 h-px bg-[#c9a28d] mx-auto mb-6" />
          <p className="text-[#7a5c4e] font-light max-w-md mx-auto">
            A glimpse into some of the moments I've been privileged to capture.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized={img.src.startsWith("/")}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[#7a5c4e] font-light mb-6">
            Want to see more? Follow along on Instagram & Facebook
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/katie_pollard_photos/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#c9a28d] text-[#c9a28d] text-xs font-medium tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#c9a28d] hover:text-white transition-all duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/katiepollardphotos/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#c9a28d] text-[#c9a28d] text-xs font-medium tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#c9a28d] hover:text-white transition-all duration-300"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
