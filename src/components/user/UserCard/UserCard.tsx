import type { GithubUser } from '@/types'

type UserCardProps = {
  user: GithubUser
}

export default function UserCard({user}: UserCardProps){
  return (
    <section className='mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg'>
      <div className='flex flex-col items-center'>
        <img src={user.avatar_url} alt={user.login} className='h-32 w-32 rounded-full border-4 border-gray-200'/>

        <h2 className='mt-6 text-3xl font-bold'>{user.name ?? user.login}</h2>

        <p className='mt-2 text-gray-600'>{user.bio ?? "Sem biografia"}</p>

        {user.location && (
          <p className='mt-3 text-gray-500'>
            📍 {user.location}
          </p>
        )}

        <div className='mt-8 flex gap-10'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold'>
              {user.followers}
            </h3>

            <span className='text-gray-500'>
              Seguidores
            </span>
          </div>

          <div className='text-center'>
            <h3 className='text-2xl font-bold'>
              {user.following}
            </h3>

            <span className='text-gray-500'>
              Seguindo
            </span>
          </div>

          <div className='text-center'>
            <h3 className='text-2xl font-bold'>
              {user.public_repo}
            </h3>

            <span className='text-gray-500'>
              Repositórios
            </span>
          </div>
        </div>

        <a href={user.html_url} target='blank' rel='noopener noreferrer' className='mt-8 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-black'>
          Abri perfil
        </a>
      </div>
    </section>
  );
}

