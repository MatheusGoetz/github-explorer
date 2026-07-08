import { RepositoryList, UserSkeleton } from "@/components";
import { useGithubRespositories } from "@/hooks/useGithubRepositories"


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
  } = useGithubRespositories(username);

  if (!username) return null;

  if (isPending) {
    return <p>Carregando repositórios...</p>;
  }

  if (isError) {
    return <UserSkeleton />
  }

  if (!repositories?.length) {
    return (
      <p className="mt-6 text-center">
        Nenhum repositório encontrado.
      </p>
    );
  }

  return (
    <RepositoryList repositories={repositories} />
  );
}
