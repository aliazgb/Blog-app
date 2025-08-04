import Image from "next/image";

function Avatar({ width = 40, src }) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      alt={src}
      width={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
    />
  );
}

export default Avatar;
