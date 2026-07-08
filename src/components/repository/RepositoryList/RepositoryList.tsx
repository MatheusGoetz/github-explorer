import type { GithubRepository } from "@/types";
import { RepositoryCard } from "@/components";

interface RepositoryListProps {
  repositories: GithubRepository[];
}

export default function RepositoryList({
  repositories,
}: RepositoryListProps) {
  return (
    <section className="mt-8">
      <h2 className="mb-6 text-2xl font-bold">
        Repositórios
      </h2>

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