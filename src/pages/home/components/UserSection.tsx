import { UserCard, UserSkeleton } from "@/components";
import { useGithubUser } from "@/hooks/useGithubUser";
import { useEffect } from "react";

interface UserSectionProps {
  username: string;
  onUserLoaded?: (login: string) => void;
}

export default function UserSection({
  username,
  onUserLoaded,
}: UserSectionProps) {
  const {
    data: user,
    isPending,
    isError,
    error,
  } = useGithubUser(username);

  useEffect(() => {
    if (user) {
      onUserLoaded?.(user.login);
    }
  }, [user, onUserLoaded]);

  if (!username) return null;

  if (isPending) {
    return <UserSkeleton/>
  }

  if (isError) {
    return (
      <p className="mt-6 text-center text-red-500">
        {error.message}
      </p>
    );
  }

  return user ? <UserCard user={user} /> : null;
}