import type { GithubRepository } from "@/types";
import {Star, GitFork, Code2} from "lucide-react"

interface RepositoryCardProps {
  repository: GithubRepository;
}

export default function RepositoryCard({repository}: RepositoryCardProps){
  return(
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">
          {repository.name}
        </h3>

        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Abrir →
        </a>
      </div>

      <p className="mt-3 text-gray-600">
        {repository.description ?? "Este repositório não possui descrição."}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Code2 size={16}/>
          {repository.language ?? "Não informado"}
        </span>

        <span className="flex items-center gap-1">
          <Star size={16}/>
          {repository.stargazers_count}
        </span>

        <span className="flex items-center gap-1">
          <GitFork size={16} />
          {repository.forks_count}
        </span>
      </div>
    </article>
  );
}