export interface GithubUser {
  login: string,
  avatar_url: string,
  name: string,
  bio: string,
  location: string,
  followers: number,
  following: number,
  public_repo: number,
  html_url: string
}

export interface GithubRepository{
  id: number,
  name: string,
  description: string | null,
  html_url: string,

  language: string | null,

  stargazers_count: number,

  forks_count: number,

  updated_at: string
}