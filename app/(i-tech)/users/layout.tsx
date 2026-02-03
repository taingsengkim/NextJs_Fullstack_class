import { SkeletonAvatar } from "@/components/i-skeletons/skeleton-avavat";
import { Suspense } from "react";
import UserLoading from "./loading";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
                <p className="dark:text-white md:text-xl">
                  We craft solutions that amplify key characteristics, achieving
                  a harmonious balance of function and intent. Through careful
                  analysis and collaborative engagement, our spaces transcend
                  the conventional.
                </p>
              </div>
            </div>
          </div>

          <Suspense fallback={<UserLoading />}>{children} </Suspense>
        </div>
      </section>
    </div>
  );
}
