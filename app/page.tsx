'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  const containerStyle = {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "2rem",
    background: "white",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "sans-serif",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1rem"
  };

  const avatarStyle = {
    borderRadius: "50%",
    width: "80px",
    marginTop: "1rem"
  };

  return (
    <div style={containerStyle}>
      <h1>CS391 OAuth Demo</h1>
      {!session ? (
        <>
          <p>Click below to sign in with GitHub:</p>
          <button onClick={() => signIn('github')} style={buttonStyle}>Sign In</button>
        </>
      ) : (
        <>
          <img src={session.user?.image || ''} alt="Avatar" style={avatarStyle} />
          <p><strong>Name:</strong> {session.user?.name}</p>
          <p><strong>Email:</strong> {session.user?.email}</p>
          <button onClick={() => signOut()} style={buttonStyle}>Sign Out</button>
        </>
      )}
    </div>
  );
}
