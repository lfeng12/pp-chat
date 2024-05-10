import React from 'react';

type EmailLoginProps = {
  email: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  onSignIn: () => Promise<void>;
  onSignUp: () => Promise<void>;
};

const EmailLogin: React.FC<EmailLoginProps> = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  onSignIn,
  onSignUp
}) => {
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Password"
      />
      <button onClick={onSignIn}>Sign In</button>
      <button onClick={onSignUp}>Sign Up</button>
    </div>
  );
};

export default EmailLogin;
