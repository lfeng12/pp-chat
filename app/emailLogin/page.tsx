"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EmailLogin from '../../framer/emailLogin'; // Ensure the path is correct

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signIn = async () => {
    console.log('Sign In Clicked');
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, type: 'signin' }),
      });

      const result = await response.json();
      console.log('Sign In Response:', result);

      if (response.ok) {
        router.push('/protected');
      } else {
        console.error('Login failed:', result.error);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const signUp = async () => {
    console.log('Sign Up Clicked');
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, type: 'signup' }),
      });

      const result = await response.json();
      console.log('Sign Up Response:', result);

      if (response.ok) {
        router.push('/login?message=Check email to continue sign in process');
      } else {
        console.error('Sign-up failed:', result.error);
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <EmailLogin
        email={email}
        onEmailChange={setEmail}
        password={password}
        onPasswordChange={setPassword}
        onSignIn={signIn}
        onSignUp={signUp}
      />
    </div>
  );
}
