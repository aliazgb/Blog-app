import Avatar from "@/ui/Avatar";

interface AuthorProps {
  name: string;
  avatarUrl?: string;
}

const defaultAvatarImg =
  "https://i.postimg.cc/BbZkbb9F/1721899817313-127506334.png";

function Author({ name, avatarUrl = defaultAvatarImg }: AuthorProps) {
  return (
    <div className="flex">
      <Avatar src={avatarUrl || defaultAvatarImg} />
    </div>
  );
}

export default Author;
