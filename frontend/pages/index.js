import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
  const { data: session } = useSession();
  return session ? (
    <div>
      <h1>Está logado!</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  ) : (
    <div>
      <h1>Não esta logado!</h1>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
