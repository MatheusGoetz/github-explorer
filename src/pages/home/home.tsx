import { useState } from "react";

import { Header, SearchBar } from "@/components";

import UserSection from "./components/UserSection";
import RepositorySection from "./components/RepositorySection";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Header />

      <SearchBar onSearch={setSearch} />

      <UserSection
        username={search}
        onUserLoaded={setSelectedUser}
      />

      {selectedUser && (
        <RepositorySection username={selectedUser} />
      )}
    </main>
  );
}