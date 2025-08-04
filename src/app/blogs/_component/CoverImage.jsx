import Image from "next/image";

function CoverImage({ coverImageUrl, title }) {
  return (
    <div className="relative aspect-video">
      <Image
        src={coverImageUrl}
        alt={title}
        fill
        className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out "
      />
    </div>
  );
}

export default CoverImage;
