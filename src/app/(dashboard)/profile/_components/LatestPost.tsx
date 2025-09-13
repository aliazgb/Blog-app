import { JSX } from "react";
import PostRow from "../posts/_/components/PostTable";

function LatestPost(): JSX.Element  {
  const queri = "sort=latest&limit=3";
  return <PostRow queries={queri} />;
}

export default LatestPost;
