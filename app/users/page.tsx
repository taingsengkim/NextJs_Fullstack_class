import { Gallery6 } from "@/components/i-tech-cards/gallery6";
import UserDisplay from "@/components/i-tech-cards/users";
import { UserResponse } from "@/lib/type/user-response";
import { User } from "lucide-react";
import React from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function page() {
  const res = await fetch(`${API_URL}/api/v1/users`);
  const users: UserResponse[] = await res.json();
  return (
    <div>
      <section className="py-16 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_200px] lg:gap-12 xl:grid-cols-[1fr_240px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="max-w-2xl space-y-2">
                <h2 className="text-3xl text-amber-400 font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                  Our team
                </h2>
                <p className="text-white md:text-xl">
                  We craft solutions that amplify key characteristics, achieving
                  a harmonious balance of function and intent. Through careful
                  analysis and collaborative engagement, our spaces transcend
                  the conventional.
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </section>
    </div>
  );
}
