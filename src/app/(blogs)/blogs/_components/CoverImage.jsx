import Image from "next/image";

function CoverImage({ coverImageUrl, slug, title }) {
  return (
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
      <Image
        className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
        fill
        src={coverImageUrl}
        alt={title}
      />
    </div>
  );
}

export default CoverImage;
