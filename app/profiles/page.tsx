import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";

export default async function Page() {
 const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  const { data: profiles } = await supabase.from('profiles').select()

  return (
    <div class="flex flex-wrap justify-center gap-4 p-4">
        {profiles?.map(profile =>  <div className="w-[300px] h-auto mx-auto p-6 border border-gray-300 rounded-lg shadow-lg text-center bg-gray-900/80">
      <img src={profile.profilePicture} alt={profile.name} className="w-24 h-24 rounded-md mx-auto mb-4" />
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <p className="text-gray-800 mt-2">Email: {profile.email}</p>
      <p className="text-gray-600 mt-1">Bio: {profile.bio}</p>
      <p className="text-purple-600 mt-1">Location: {profile.location}</p>
    </div>
)}
   
    </div>
  );
  };