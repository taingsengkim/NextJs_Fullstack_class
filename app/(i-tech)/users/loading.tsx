import { SkeletonAvatar } from "@/components/i-skeletons/skeleton-avavat";
import React from "react";

export default function UserLoading() {
  return (
    <div className="pt-20 grid  grid-cols-1 p-5 gap-20 md:grid-cols-2 lg:grid-cols-4   ">
      {/* {Array.from({ length: 12 }).map((_, index) => (
        <SkeletonAvatar key={index} />
      ))} */}
      {[...Array(8)].map((_, index) => (
        <SkeletonAvatar key={index} />
      ))}
    </div>
  );
}
