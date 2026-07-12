import {
  RepositoryList,
  RepositorySkeleton,
} from "@/components";

import { useGithubRepositories } from "@/hooks/useGithubRepositories";

interface RepositorySectionProps {
  username: string;
}

export default function RepositorySection({
  username,
}: RepositorySectionProps) {
  const {
    data: repositories,
    isPending,
    isError,
  } = useGithubRepositories(username);

  if (!username) return null;

  if (isPending) {
    return <RepositorySkeleton />;
  }

  if (isError) {
    return (
      <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-center">
        <h2 className="text-lg font-semibold text-red-700">
          Não foi possível carregar os repositórios.
        </h2>
      </div>
    );
  }

  if (!repositories?.length) {
    return (
      <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
        <h2 className="text-lg font-semibold">
          Nenhum repositório encontrado.
        </h2>

        <p className="mt-2 text-gray-500">
          Este usuário não possui repositórios públicos.
        </p>
      </div>
    );
  }

  return (
    <RepositoryList repositories={repositories} />
  );
}