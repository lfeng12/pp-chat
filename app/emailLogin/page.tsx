import EmailLogin from "../../framer/emailLogin"
import { createClient } from "@/utils/supabase/server";
import '../../framer/styles.css'

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
        <EmailLogin email="test@gmail.com" password="1234" onEmailChange={(e)=>console.log(e)} onPasswordChange={(e)=>console.log(e)} />
    </div>
  );
}
