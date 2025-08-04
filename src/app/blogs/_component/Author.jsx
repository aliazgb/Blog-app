import Avatar from "@/ui/Avatar";

function Author({src}) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={src}/>
    </div>
  );
}

export default Author;
