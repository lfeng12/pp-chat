import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { email, password, type } = await req.json();

  console.log('API Request:', { email, password, type });

  if (type === 'signin') {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Sign-in Error:', error);
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
    return NextResponse.json({ message: 'Signed in successfully' });
  }

  if (type === 'signup') {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Sign-up Error:', error);
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
    return NextResponse.json({ message: 'Sign up successful. Check your email to continue.' });
  }

  return NextResponse.json({ error: 'Invalid request type' }, { status: 400 });
}
