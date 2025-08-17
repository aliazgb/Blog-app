import { fetchAllData } from "@/services/data";
import Card from "./_components/Card";

async function Profile() {
  const { numberOfComments, numberOfUsers, numberOfPosts } = await fetchAllData();
  console.log(numberOfComments)
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card title="Comments" value={numberOfComments} type="comments" />
        <Card title="Users" value={numberOfUsers} type="users" />
        <Card title="Posts" value={numberOfPosts} type="posts" />
      </div>
    </div>
  );
}
export default Profile;
