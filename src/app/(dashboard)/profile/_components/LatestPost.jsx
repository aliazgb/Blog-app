import PostRow from "../posts/_/components/PostTable";

function LatestPost() {
  const queri = "sort=latest&limit=3";
  return <PostRow queries={queri} />;
}

export default LatestPost;
