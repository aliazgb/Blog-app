import SpinnerMini from "@/ui/SpinnerMini";
import { Suspense } from "react";
import CardWrapper from "./_components/CardWrapper";
import LatestPost from "./_components/LatestPost";
import Fallback from "@/ui/Fallback";

async function Profile() {
  

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
