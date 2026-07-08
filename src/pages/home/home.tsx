import { useState } from "react";

import {
  Header,
  SearchBar,
  UserCard,
  RepositoryList
} from "@/components";

import { useGithub } from "@/hooks/useGithub";

export default function Home() {
  const [username, setUsername] = useState("");

  const {
    user,
    repositories,
    isLoading,
    isError,
  } = useGithub(username);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Header />

      <SearchBar
        onSearch={setUsername}
      />

      {isLoading && (
        <p className="mt-8 text-center">
          Carregando...
        </p>
      )}

      {isError && (
        <p className="mt-8 text-center text-red-500">
          Ocorreu um erro ao buscar os dados.
        </p>
      )}

      {user && <UserCard user={user} />}

      {repositories && (
        <RepositoryList
          repositories={repositories}
        />
      )}
    </main>
  );
}