import Avatar from "@/ui/Avatar";

const defaultAvatarImg =
  "https://i.postimg.cc/BbZkbb9F/1721899817313-127506334.png";

function Author({ name, avatarUrl = defaultAvatarImg }) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl || defaultAvatarImg} />
      <span className="text-sm text-secondary-500">{name}</span>
    </div>
  );
}

export default Author;
