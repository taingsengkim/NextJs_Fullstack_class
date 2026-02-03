import UserDisplay from "@/components/i-tech-cards/users";
import { UserResponse } from "@/lib/type/user-response";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function UsersPage() {
  const res = await fetch(`${API_URL}/api/v1/users`);
  const users: UserResponse[] = await res.json();
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {users.map((member, index) => (
        <UserDisplay
          name={member.name}
          role={member.role}
          avatar={member.avatar}
          key={index}
        />
      ))}
    </div>
  );
}
