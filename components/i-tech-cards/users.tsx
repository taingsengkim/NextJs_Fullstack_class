import { UserResponse } from "@/lib/type/user-response";
import Image from "next/image";

export default function UserDisplay({ name, role, avatar }: UserResponse) {
  return (
    <div className="bg-card rounded-lg border">
      <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
        <img src={avatar} alt={name} className="rounded-t-lg object-fill" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-muted-foreground text-sm">{role}</p>
      </div>
    </div>
  );
}
