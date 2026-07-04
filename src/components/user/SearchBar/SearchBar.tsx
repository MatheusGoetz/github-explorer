import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (username: string) => void;
  isLoading?: boolean;
};

function SearchBar({onSearch, isLoading = false}: SearchBarProps){
  const [search, setSearch] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const username = search.trim();

    if(!username) return;
    if(isLoading) return;

    onSearch(username);
  }

  return (
    <form
    onSubmit={handleSubmit}
    className="mx-auto mt-8 flex max-w-2xl gap-3"
    >
      <input
      type="text"
      placeholder="Digite um usuário do GitHub..."
      value={search}
      disabled={isLoading}
      onChange={(event) => setSearch(event.target.value)}
      className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
      />

      <button
      type="submit"
      disabled={isLoading}
      className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
      >
        {isLoading ? "Pesquisando..." : "Pesquisar"}
      </button>
    </form>
  );
}

export default SearchBar;