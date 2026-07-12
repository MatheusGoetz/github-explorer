import type { GithubRepository } from "@/types";
import { RepositoryCard } from "@/components";

interface RepositoryListProps {
  repositories: GithubRepository[];
}

export default function RepositoryList({
  repositories,
}: RepositoryListProps) {
  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="mb-6 text-2xl font-bold">
          Repositórios
        </h2>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
          {repositories.length} encontrados
        </span>
      </div>

      <div className="space-y-4">
        {repositories.map((repository) => (
          <RepositoryCard
            key={repository.id}
            repository={repository}
          />
        ))}
      </div>
    </section>
  );
}