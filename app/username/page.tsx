import { createClient } from "@/utils/supabase/server";
import '../../framer/styles.css'
import Username from "../../framer/username"

export default async function Page() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <Username />
    </div>
  );
}
