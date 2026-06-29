import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (username: string) => void;
};

function SearchBar({onSearch}: SearchBarProps){
  const [username, setUsername] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedUsername = username.trim();

    if(!trimmedUsername) return;

    onSearch(trimmedUsername);
  }

  return (
    <form
    onSubmit={handleSubmit}
    className="mx-auto mt-8 flex max-w-2xl gap-3"
    >
      <input
      type="text"
      placeholder="Digite um usuário do GitHub..."
      value={username}
      onChange={(event) => setUsername(event.target.value)}
      className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
      />

      <button
      type="submit"
      className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
      >
        Pesquisar
      </button>
    </form>
  );
}

export default SearchBar;