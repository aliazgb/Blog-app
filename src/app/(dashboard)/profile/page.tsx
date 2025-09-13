import Fallback from "@/ui/Fallback";
import { JSX, Suspense } from "react";
import CardWrapper from "./_components/CardWrapper";
import LatestPost from "./_components/LatestPost";

async function Profile(): Promise<JSX.Element> {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">Dashboard</h1>
      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>
      <h1 className="text-xl mb-4 text-secondary-600">Last Posts</h1>
      <Suspense fallback={<Fallback />}>
        <LatestPost />
      </Suspense>
    </div>
  );
}
export default Profile;
