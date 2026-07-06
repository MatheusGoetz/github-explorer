import { useQuery } from "@tanstack/react-query";

import { githubService } from "@/services/github";

export function useGithubRespositories(
  username: string
) {
  return useQuery({
    queryKey: ["github-repositories", username],

    queryFn: () =>
      githubService.getRepositories(username),

    enabled: !!username,
  });
}