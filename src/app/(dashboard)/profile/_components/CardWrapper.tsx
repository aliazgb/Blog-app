import { fetchAllData } from "@/services/data";
import Card from "./Card";
import { JSX } from "react";

interface AllData {
  numberOfComments: number;
  numberOfUsers: number;
  numberOfPosts: number;
}

async function CardWrapper(): Promise<JSX.Element> {
  const { numberOfComments, numberOfUsers, numberOfPosts }: AllData =
    await fetchAllData();
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card title="Comments" value={numberOfComments} type="comments" />
      <Card title="Users" value={numberOfUsers} type="users" />
      <Card title="Posts" value={numberOfPosts} type="posts" />
    </div>
  );
}

export default CardWrapper;
