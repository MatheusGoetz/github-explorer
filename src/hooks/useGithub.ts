import { useGithubRespositories } from "./useGithubRepositories";
import { useGithubUser } from "./useGithubUser";

export function useGithub(username: string){
  const userQuery = useGithubUser(username);

  const repositoryQuery = useGithubRespositories(username);

  return {
    user: userQuery.data,
    repositories: repositoryQuery.data,

    isLoading:
      userQuery.isPending ||
      repositoryQuery.isPending,

    isError:
      userQuery.isError ||
      repositoryQuery.isError,

    userError: userQuery.error,

    repositoriesError: repositoryQuery.error,
  }
}