import { api } from "@/lib/axios"
import type { GithubRepository, GithubUser } from "@/types";

export async function getUser(username: string): Promise<GithubUser> {
  const { data } = await api.get(`/users/${username}`);

  return data
}

async function getRepositories(
  username: string
): Promise<GithubRepository[]> {
  const {data} = await api.get(
    `/users/${username}/repos`
  );

  return data
}

export const githubService = {
  getUser,
  getRepositories,
}

