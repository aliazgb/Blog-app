import Image from "next/image";

type AvatarProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

function Avatar({ width = 40, src }: AvatarProps) {
  return (
    <Image
      // src={"https://i.postimg.cc/BbZkbb9F/1721899817313-127506334.png"}
      src={src || "https://i.postimg.cc/BbZkbb9F/1721899817313-127506334.png"}
      alt={"test"}
      width={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
    />
  );
}

export default Avatar;
