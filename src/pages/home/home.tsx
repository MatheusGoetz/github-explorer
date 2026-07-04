import { useState } from "react";

import { Header, SearchBar } from "@/components";
import { useGithubUser } from "@/hooks/useGithubUser";

function Home() {
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

      <SearchBar onSearch={setUsername} />
      
      {isPending && <p>Carregando...</p>}

      {isError && <p>{error.message}</p>}

      {user && (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}
    </>
  );
}

export default Home;