import { Skeleton } from "@/components";

export default function UserSkeleton() {
  return (
    <section className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
      <div className="flex flex-col items-center">
        <Skeleton className="h-32 w-32 rounded-full" />

        <Skeleton className="mt-6 h-8 w-56" />

        <Skeleton className="mt-3 h-4 w-80" />

        <Skeleton className="mt-2 h-4 w-48" />

        <div className="mt-8 flex gap-8">
          <Skeleton className="h-14 w-20" />
          <Skeleton className="h-14 w-20" />
          <Skeleton className="h-14 w-20" />
        </div>

        <Skeleton className="mt-8 h-11 w-40 rounded-lg" />
      </div>
    </section>
  );
}