import { UserResponse } from "@/lib/type/user-response";
import Image from "next/image";

export default function UserDisplay({ name, role, avatar }: UserResponse) {
  return (
    <div className="flex bg-white rounded-2xl p-5 ">
      <div className="hover:scale-110 transition">
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className="rounded-full h-20 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-base dark:text-gray-900 font-semibold tracking-tight text-foreground">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground dark:text-gray-600 font-medium mt-0.5">
          {role}
        </p>
      </div>
    </div>
  );
}
