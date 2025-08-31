import Image from "next/image";

function Avatar({ width = 40, src }) {
  return (
    <Image
      src={"https://i.postimg.cc/BbZkbb9F/1721899817313-127506334.png"}
      alt={"test"}
      width={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
    />
  );
}

export default Avatar;
