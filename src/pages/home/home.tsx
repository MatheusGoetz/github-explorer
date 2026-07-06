import { useState } from "react";

import { Header, SearchBar, UserCard } from "@/components";
import { useGithubUser } from "@/hooks/useGithubUser";

export default function Home() {
  const [username, setUsername] = useState("");

  const {
    data: user,
    isPending,
    isError,
    error,
  } = useGithubUser(username);

  return (
    <>
      <Header />

      <SearchBar onSearch={setUsername}/>

      {isPending && <p>Carregando...</p>}

      {isError && <p className="mt-6 text-center text-red-500">{error.message}</p>}

      {user && <UserCard user={user}/>}
    </>
  );
}