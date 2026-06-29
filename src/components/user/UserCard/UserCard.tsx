import type { GithubUser } from '@/types'

type UserCardProps = {
  user: GithubUser
}

function UserCard({user}: UserCardProps){
  return (
    <section className='mx-auto mt-8 max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
      <div className='flex items-center gap-6'>
        <img src={user.avatar_url} alt={user.name} className='h-28 w-8 rounded-full'/>

        <div className='flex-1'>
          <h2 className='text-2xl font-bold'>
            {user.name || user.login}
          </h2>

          <p className='mt-2 text-gray-600'>
            {user.bio || "Esse usuário não possui bio."}
          </p>

          {user.location && (
            <p className='mt-3'>
              📍{user.location}
            </p>
          )}
        </div>
      </div>

      <div className='mt-8 flex justify-between rounded-lg bg-gray-100 p-4'>
        <div className='text-center'>
          <strong>{user.followers}</strong>

          <p className='text-sm text-gray-500'>Seguidores</p>
        </div>

        <div className='text-center'>
          <strong>{user.following}</strong>

          <p className='text-sm text-gray-500'>Seguindo</p>
        </div>

        <div className='text-center'>
          <strong>{user.public_repo}</strong>

          <p className='text-sm text-gray-500'>Repositórios</p>
        </div>
      </div>
    </section>
  );
}

export default UserCard;