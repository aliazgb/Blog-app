import { Suspense } from "react";

async function Profile() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-500">داشبورد</h1>
      <Suspense></Suspense>
      <div>
        <h1 className="text-xl mb-4 text-secondary-500">آخرین پست ها</h1>
        <Suspense></Suspense>
      </div>
    </div>
  );
}
export default Profile;
