import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen  flex flex-col items-center justify-center gap-20  ">
      <h1 className="text-center font-bold text-8xl text-amber-400 ">ហេឡូ</h1>
      <Link href="/about-us">
        <button
          type="button"
          className="focus:outline-black rounded-lg text-amber-400 font-bold text-sm py-2.5 px-4 border-b-4 hover:cursor-pointer hover:scale-110 transition"
        >
          About Us
        </button>
      </Link>
    </div>
  );
}
