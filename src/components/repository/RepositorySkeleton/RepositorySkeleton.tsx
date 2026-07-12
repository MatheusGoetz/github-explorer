import { Skeleton } from '@/components';

export default function RepositorySkeleton(){
  return(
    <div className='space-y-4 mt-8'>
      {Array.from({length: 5}).map((_, index) =>(
        <div
          key={index}
          className='rounded-x1 border border-gray-200 bg-white p-6 shadow-sm'
        >
          <Skeleton className='H-6 W-52'/>

          <Skeleton className='mt-4 h-4 w-full'/>

          <Skeleton className='mt-2 h-4 w-3/4'/>

          <div className='mt-6 flex gap-4'>
            <Skeleton className='h-4 w-20'/>
            <Skeleton className='h-4 w-16'/>
            <Skeleton className='h-4 w-16'/>
          </div>
        </div>
      ))}
    </div>
  )
}